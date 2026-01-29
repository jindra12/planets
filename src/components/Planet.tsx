import * as React from "react";
import { Planet as PlanetType } from "../api/types";
import { Descriptions, List } from "antd";

export const Planet: React.FunctionComponent<PlanetType> = (props) => {
    return (
        <List.Item>
            <List.Item.Meta
                title={props.name}
                description={`Gravity: ${props.gravity}`}
            />
            <Descriptions
                layout="vertical"
                title="Details"
                bordered
                column={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 3 }}
            >
                <Descriptions.Item label="Climate">
                    {props.climate}
                </Descriptions.Item>
                <Descriptions.Item label="Terrain">
                    {props.terrain}
                </Descriptions.Item>
                <Descriptions.Item label="Diameter">
                    {props.diameter}
                </Descriptions.Item>
                <Descriptions.Item label="Population">
                    {props.population}
                </Descriptions.Item>
                <Descriptions.Item label="Surface water">
                    {props.surface_water}
                </Descriptions.Item>
            </Descriptions>
        </List.Item>
    );
};
