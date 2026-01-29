import * as React from "react";
import Layout from "antd/es/layout";
import { Content, Footer, Header } from "antd/es/layout/layout";
import ConfigProvider from "antd/es/config-provider";
import theme from "antd/es/theme";
import Flex from "antd/es/flex";
import Switch from "antd/es/switch";
import { useMediaQuery } from "usehooks-ts";

export const AppLayout: React.FunctionComponent<React.PropsWithChildren> = (props) => {
    const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
    const [isDark, setDark] = React.useState(prefersDark);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
            }}
        >
            <Layout>
                <Header>
                    <Flex wrap gap="16px" justify="space-between" align="center">
                        <strong>
                            This is a test page used to showcase my React skills
                        </strong>
                        <Switch
                            checked={!isDark}
                            onChange={setDark}
                            checkedChildren="Light mode"
                            unCheckedChildren="Dark mode"
                        />
                    </Flex>
                </Header>
                <Layout>
                    <Content>{props.children}</Content>
                </Layout>
                <Footer>
                    Published freely under MIT licence
                </Footer>
            </Layout>
        </ConfigProvider>
    );
};