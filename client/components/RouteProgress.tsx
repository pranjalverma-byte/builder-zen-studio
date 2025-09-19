import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function RouteProgress() {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const t = setTimeout(() => setActive(false), 700);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return active ? <div className="route-progress" aria-hidden /> : null;
}
