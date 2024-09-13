import { IRON_SESSION_SECRET } from "@/constants/api";
import { SessionOptions } from "iron-session";

export interface SessionData {
  accessToken: string;
  refreshToken: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  accessToken: "",
  refreshToken: "",
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: IRON_SESSION_SECRET || "",
  cookieName: "auth-session",
  cookieOptions: {
    path: "/",
    secure: process.env.NODE_ENV === "production",
  },
};
