import { useEffect } from "react";
const KEY = "redux";
export function loadState() {
  try {
    if (typeof window === "object") {
      const serializedState = localStorage.getItem(KEY);
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
    }
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state) {
  try {
    useEffect(() => {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(KEY, serializedState);
    });
  } catch (e) {}
}
