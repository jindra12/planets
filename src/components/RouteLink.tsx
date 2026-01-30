import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";

export interface RouteLinkProps {
    href: string;
}

export const RouteLink: React.FunctionComponent<React.PropsWithChildren<RouteLinkProps>> = (props) => {
    const navigate = useNavigate();
    const onClick = (event: React.MouseEvent) => {
        if (!event.ctrlKey) {
            event.preventDefault();
            navigate(props.href);
        }
    };
    return (
        <Typography.Link href={props.href} onClick={onClick}>
            {props.children}
        </Typography.Link>
    );
};
