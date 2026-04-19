import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * SPA 라우트 전환 시 스크롤 위치가 유지되는 문제 방지(법적 페이지 등 상단부터 보이게).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
