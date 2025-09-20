import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/index";
import { useEffect } from "react";
export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/LoginPage", { replace: true });
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
}
