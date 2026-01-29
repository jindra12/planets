import * as React from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { Button, Flex, Result, Spin } from "antd";
import { AxiosError } from "axios";

import { convertStatusCode } from "../utils";
import { ReloadOutlined } from "@ant-design/icons";

export interface LoaderProps<TData> {
    query: UseQueryResult<TData, AxiosError>;
    children: (data: TData) => React.ReactNode;
}

export const Loader = <TData,>(props: LoaderProps<TData>) => {
    const {
        error,
        refetch,
        data,
        isLoading,
    } = props.query;

    if (isLoading) {
        return <Spin />;
    }

    if (error) {
        return (
            <Result
                status={convertStatusCode(error.status)}
                subTitle={<Button type="primary" onClick={() => refetch()}>Retry</Button>}
            />
        );
    }

    if (data) {
        return (
            <Flex vertical gap="16px">
                <Flex justify="end">
                    <Button
                        onClick={() => refetch()}
                        icon={<ReloadOutlined />}
                    >
                        Refresh
                    </Button>
                </Flex>
                {props.children(data)}
            </Flex>
        );
    }

    return null;
};
