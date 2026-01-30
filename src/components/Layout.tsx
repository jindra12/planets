import * as React from "react";
import Layout from "antd/es/layout";
import { Content, Footer, Header } from "antd/es/layout/layout";
import ConfigProvider from "antd/es/config-provider";
import theme from "antd/es/theme";
import Flex from "antd/es/flex";
import Switch from "antd/es/switch";
import Divider from "antd/es/divider";
import { RouteLink } from "./RouteLink";
import { Typography } from "antd";

export const AppLayout: React.FunctionComponent<React.PropsWithChildren> = (props) => {
    const [isDark, setDark] = React.useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

    return (
        <ConfigProvider
            theme={{
                algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
            }}
        >
            <Layout className={isDark ? "ant-layout-dark" : "ant-layout-light"}>
                <Header>
                    <Flex wrap gap="16px" justify="space-between" align="center">
                        <strong>
                            <Typography.Link href="/">
                                Interview page
                            </Typography.Link>
                        </strong>
                        <Switch
                            checked={!isDark}
                            onChange={(checked) => setDark(!checked)}
                            checkedChildren="Light mode"
                            unCheckedChildren="Dark mode"
                        />
                    </Flex>
                </Header>
                <Divider />
                <Content>
                    <div className="ant-layout-inner">
                        {props.children}
                    </div>
                </Content>
                <Divider />
                <Footer>
                    Published freely under MIT licence
                </Footer>
            </Layout>
        </ConfigProvider>
    );
};