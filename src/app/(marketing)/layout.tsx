import React from "react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

interface Props {
    children: React.ReactNode
}

const MarketingLayout = async ({ children }: Props) => {

    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    );
};

export default MarketingLayout