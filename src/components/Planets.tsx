import * as React from "react";
import { Flex, List, Typography } from "antd";

import { usePlanets } from "../api/usePlanets";
import { Loader } from "./Loader";
import { Planet } from "./Planet";

const Planets: React.FunctionComponent = () => {
    const planets = usePlanets();
    return (
        <Loader query={planets}>
            {(planets, refresh) => (
                <List
                    dataSource={planets}
                    itemLayout="vertical"
                    header={(
                        <Flex justify="space-between" align="center" wrap gap="8px">
                            <Typography.Title level={1}>Planets</Typography.Title>
                            <Flex justify="end">
                                {refresh}
                            </Flex>
                        </Flex>
                    )}
                    renderItem={(planet) => <Planet {...planet} />}
                    pagination={{ pageSize: 5 }}
                />
            )}
        </Loader>
    );
};

export default Planets;