import { BrowserRouter, Route, Routes } from "react-router-dom";

import ApplyLawyer from "./pages/ApplyLawyer";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Loader from "./components/Loader";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && <Loader />}
      <Toaster position="top-center" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/apply-lawyer"
          element={
            <ProtectedRoute>
              <Layout>
                <ApplyLawyer />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
