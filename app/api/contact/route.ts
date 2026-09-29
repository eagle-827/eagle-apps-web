import { NextResponse } from "next/server";
import {
  createServiceRoleClient,
  SupabaseServerConfigError,
} from "@/lib/supabase/server";

const APP_IDS = ["home", "get-ready", "baby", "other"] as const;
const FAILURE_MESSAGE = "送出失敗，請稍後再試 ♡";
const MAX_BODY_CHARS = 16_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type AppId = (typeof APP_IDS)[number];

function failure(status: number) {
  return NextResponse.json(
    { success: false, message: FAILURE_MESSAGE },
    { status }
  );
}

function isAppId(value: string): value is AppId {
  return (APP_IDS as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? "");

    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_CHARS) {
      return failure(413);
    }

    const raw = await request.text();

    if (!raw || raw.length > MAX_BODY_CHARS) {
      return failure(400);
    }

    let body: unknown;

    try {
      body = JSON.parse(raw);
    } catch {
      return failure(400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return failure(400);
    }

    const record = body as Record<string, unknown>;
    const emailIsAllowed =
      record.email === undefined ||
      record.email === null ||
      typeof record.email === "string";

    if (
      typeof record.selectedApp !== "string" ||
      typeof record.idea !== "string" ||
      !emailIsAllowed
    ) {
      return failure(400);
    }

    const selectedApp = record.selectedApp;
    const idea = record.idea.trim();
    const emailInput =
      typeof record.email === "string" ? record.email.trim() : "";

    if (!isAppId(selectedApp) || idea.length < 1 || idea.length > 1000) {
      return failure(400);
    }

    if (emailInput.length > 254 || (emailInput && !EMAIL_PATTERN.test(emailInput))) {
      return failure(400);
    }

    const supabase = createServiceRoleClient();
    const { error } = await supabase.from("app_wishes").insert({
      app_id: selectedApp,
      idea,
      email: emailInput || null,
      status: "new",
    });

    if (error) {
      console.error("app_wishes insert failed", error.code ?? "unknown");
      return failure(500);
    }

    return NextResponse.json({
      success: true,
      message: "許願已送出 ♡",
    });
  } catch (error) {
    if (error instanceof SupabaseServerConfigError) {
      console.error(error.message);
    } else {
      console.error("Contact wish request failed");
    }

    return failure(500);
  }
}
