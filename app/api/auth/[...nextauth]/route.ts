import NextAuth from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

const handler = NextAuth(NEXT_AUTH_CONFIG);

export const GET = handler;
export const POST = handler;
