import { BASE_URL } from "@/constants/api";
import { Wallet } from "@/types/wallet";
import { getSession } from "@/utils/auth";

export async function getWalletData() {
  const session = await getSession();
  if (!session?.accessToken) return;
  const accessToken = session?.accessToken;

  const response = await fetch(`${BASE_URL}/authentication/me/wallet`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch orders", {
      cause: data,
    });
  }

  return data as Wallet;
}
