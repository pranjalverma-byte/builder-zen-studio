import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Connectivity from "./pages/Connectivity";
import Support from "./pages/Support";
import EmergencyContacts from "./pages/EmergencyContacts";
import Spo2 from "./pages/Spo2";
import Accelerometer from "./pages/Accelerometer";
import Temperature from "./pages/Temperature";
import SleepSchedule from "./pages/SleepSchedule";
import StressAnxiety from "./pages/StressAnxiety";
import ProtectedRoute from "@/components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import RouteProgress from "@/components/RouteProgress";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/spo2"
          element={
            <ProtectedRoute>
              <Spo2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/accelerometer"
          element={
            <ProtectedRoute>
              <Accelerometer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/temperature"
          element={
            <ProtectedRoute>
              <Temperature />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/sleep"
          element={
            <ProtectedRoute>
              <SleepSchedule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/stress-anxiety"
          element={
            <ProtectedRoute>
              <StressAnxiety />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/connectivity"
          element={
            <ProtectedRoute>
              <Connectivity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/support"
          element={
            <ProtectedRoute>
              <Support />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/emergency-contacts"
          element={
            <ProtectedRoute>
              <EmergencyContacts />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteProgress />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
