import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_KEY);

export function GET(req: Request) {
    return NextResponse.json({message: "This method is not allowed"})
}

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log(name)
  await resend.emails.send({
    from: "Acme <onboarding@resend.dev",
    to: ['moxvankar2005@gmail'],
    subject: "Hello world",
    text: JSON.stringify({ name, email, message }),
  });

  return NextResponse.json({
    status: "ok",
  });
}
