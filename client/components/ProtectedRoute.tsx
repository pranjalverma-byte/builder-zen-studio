import { ReactNode, useEffect } from "react";
import { isAuthed } from "@/lib/auth";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthed()) navigate("/login", { replace: true });
  }, [navigate]);
  return <>{children}</>;
}
