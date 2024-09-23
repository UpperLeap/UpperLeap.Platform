import { BASE_URL } from "@/constants/api";
import { User } from "@/types/user";
import { SessionData, sessionOptions } from "@/utils/ironSessionOptions";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function getUser() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session?.accessToken) return;
  const accessToken = session?.accessToken;

  const response = await fetch(`${BASE_URL}/authentication/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch user", {
      cause: data,
    });
  }

  return data as User;
}
