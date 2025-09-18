const AUTH_KEY = "auth_user";
const VALID_USER = "kronos";
const VALID_PASS = "1234";

export function login(username: string, password: string): boolean {
  if (username === VALID_USER && password === VALID_PASS) {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ username }));
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthed(): boolean {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return parsed?.username === VALID_USER;
  } catch {
    return false;
  }
}

export function getUser(): string | null {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    return JSON.parse(raw)?.username ?? null;
  } catch {
    return null;
  }
}

export const constants = { VALID_USER, VALID_PASS };
