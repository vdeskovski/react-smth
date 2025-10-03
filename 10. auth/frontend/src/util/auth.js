import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpDate = localStorage.getItem("expiration");
  const expDate = new Date(storedExpDate);
  const now = new Date();
  const dur = expDate.getTime() - now.getTime();
  return dur;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const dur = getTokenDuration();
  if (dur < 0) {
    return "EXPIRED";
  }
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
}
