import * as React from "react";
import Head from "next/head";

export const AppHead: React.FunctionComponent = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="CBData interview page" />
            <meta property="og:title" content="CBData interview page" />
            <meta property="og:description" content="A simple interview page" />
            <meta property="og:image" content="%PUBLIC_URL%/preview-image.png" />
            <meta property="og:url" content="https://seznam.cz" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="CBData interview page" />
            <meta name="twitter:description" content="A simple interview page" />
            <meta name="twitter:image" content="%PUBLIC_URL%/preview-image.png" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <title>CBData Interview</title>
        </Head>
    );
};