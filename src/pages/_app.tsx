import type { AppProps } from "next/app";
/// @ts-ignore
import "../index.scss";

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;