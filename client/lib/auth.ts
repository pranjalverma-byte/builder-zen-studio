const AUTH_KEY = "auth_user";
const USERS_KEY = "auth_users";
const VALID_USER = "kronos";
const VALID_PASS = "1234";

type UserMap = Record<string, string>; // username -> password

function getUsers(): UserMap {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as UserMap) : {};
  } catch {
    return {};
  }
}

function saveUsers(users: UserMap) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function register(username: string, password: string): { ok: boolean; error?: string } {
  const u = username.trim();
  if (u.length < 4 || password.length < 4) {
    return { ok: false, error: "Username and password must be at least 4 characters." };
  }
  const users = getUsers();
  if (users[u]) {
    return { ok: false, error: "Username already exists." };
  }
  users[u] = password;
  saveUsers(users);
  localStorage.setItem(AUTH_KEY, JSON.stringify({ username: u }));
  return { ok: true };
}

export function login(username: string, password: string): boolean {
  const users = getUsers();
  if (users[username] && users[username] === password) {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ username }));
    return true;
  }
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
    const u = parsed?.username as string | undefined;
    if (!u) return false;
    const users = getUsers();
    return u in users || u === VALID_USER;
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
