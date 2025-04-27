import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// layout
import DashboardLayout from "@/layouts/dashboard-layout";
import LazyLoading from "@/layouts/lazy-loader";

// pages
const SignupPage = lazy(() => import("@/pages/signup"));
const SigninPage = lazy(() => import("@/pages/signin"));
const DashboardPage = lazy(() => import("@/pages/dashboard"));
const TablesPage = lazy(() => import("@/pages/dashboard/tables"));

const PageRoutes = () => {
  return (
    <Suspense fallback={<LazyLoading />}>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="*" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="tables" element={<TablesPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;
