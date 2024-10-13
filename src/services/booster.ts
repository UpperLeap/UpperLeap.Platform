import { BASE_URL } from "@/constants/api";
import { User } from "@/types/user";
import { getSession } from "@/utils/auth";

export async function getBoosterByUsername(username: string) {
  const response = await fetch(`${BASE_URL}/boosting/user/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) return null;

  const data = await response?.json();

  return data as User;
}
