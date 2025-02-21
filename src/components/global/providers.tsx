"use client";

import React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

interface Props {
    children: React.ReactNode;
}

const client = new QueryClient();

const Providers = ({ children }: Props) => {
    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
            <QueryClientProvider client={client}>
                <ClerkProvider>
                    {children}
                </ClerkProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default Providers
