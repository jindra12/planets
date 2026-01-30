import React from "react";
import Spin from "antd/es/spin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppLayout } from "./components/Layout";

const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
        },
    },
});

const suspense = (Component: React.FunctionComponent) => () => (
    <React.Suspense fallback={<Spin size="large" />}>
        <Component />
    </React.Suspense>
);

const Planets = React.lazy(() => import("./components/Planets"));
const Person = React.lazy(() => import("./components/Person"));
const Film = React.lazy(() => import("./components/Film"));
const NotFound = React.lazy(() => import("./components/NotFound"));

const Main = () => (
    <React.StrictMode> {/* Adds developer mode-only checks to find common bugs */}
        <BrowserRouter> {/* A few pages just to browse around */}
            <QueryClientProvider client={client}> {/* this context stores API results */}
                <AppLayout> {/* Simple ANT Design layout to make sure the page isn't empty */}
                    <Routes>
                        <Route path="/" Component={suspense(Planets)} />
                        <Route path="/film/:id" Component={suspense(Film)} />
                        <Route path="/person/:id" Component={suspense(Person)} />
                        <Route path="*" Component={suspense(NotFound)} />
                    </Routes>
                </AppLayout>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);

export default Main;