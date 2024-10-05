import { BASE_URL } from "@/constants/api";
import { Order, OrdersResponse } from "@/types/order";
import { getSession } from "@/utils/auth";

export async function getOrders() {
  const session = await getSession();
  if (!session?.accessToken) return;
  const accessToken = session?.accessToken;

  const response = await fetch(`${BASE_URL}/orders`, {
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

  return data as OrdersResponse;
}

export async function getOrderById(orderId: string) {
  const session = await getSession();
  if (!session?.accessToken) return;
  const accessToken = session?.accessToken;

  const response = await fetch(`${BASE_URL}/orders/${orderId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch order", {
      cause: data,
    });
  }

  return data as Order;
}
