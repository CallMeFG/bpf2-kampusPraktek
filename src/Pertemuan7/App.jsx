import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Loading from "./components/Loading";
import { Suspense } from "react";

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));


function ErrorRoute() {
    const { code } = useParams();
    return <ErrorPage code={parseInt(code)} />;
}

export default function App() {

    return (
        <Suspense fallback={<Loading />}>

        <Routes>
            <Route element={<MainLayout />}>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/error/:code" element={<ErrorRoute />} />
            </Route>

            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
            </Route>
        </Routes>
        </Suspense>
    );
}
