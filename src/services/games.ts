import { BASE_URL } from "@/constants/api";
import { BasicGame } from "@/types/game";

export async function getGames() {
  const response = await fetch(`${BASE_URL}/games`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch games", {
      cause: data,
    });
  }

  return data as BasicGame[];
}

export async function getGame(gameName: string) {
  const response = await fetch(`${BASE_URL}/games/${gameName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch game data", {
      cause: data,
    });
  }

  return data as BasicGame;
}
