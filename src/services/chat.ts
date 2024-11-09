import { BASE_URL } from "@/constants/api";
import { Chat } from "@/types/chat";
import { getSession } from "@/utils/auth";

export async function getChatDataById(orderId: string) {
  const session = await getSession();
  if (!session?.accessToken) return;
  const accessToken = session?.accessToken;

  const response = await fetch(`${BASE_URL}/chats/room/${orderId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // console.log(response);

  if (!response.ok) return null;

  const data = await response.json();

  return data as Chat;
}
