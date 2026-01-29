import * as React from "react";
import { List, Typography } from "antd";
import { usePlanets } from "../api/usePlanets";
import { Loader } from "./Loader";
import { Planet } from "./Planet";

const Planets: React.FunctionComponent = () => {
    const planets = usePlanets();
    return (
        <Loader query={planets}>
            {(planets) => (
                <List
                    dataSource={planets}
                    header={<Typography.Title level={1}>Planets</Typography.Title>}
                    renderItem={(planet) => <Planet {...planet} />}
                    pagination={{ pageSize: 5 }}
                />
            )}
        </Loader>
    );
};

export default Planets;