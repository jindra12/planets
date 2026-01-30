import * as React from "react";
import { Button, Result } from "antd";

const NotFound: React.FunctionComponent = () => {
    return (
        <Result
            status={404}
            subTitle={<Button href="/">Back to homepage</Button>}
        />
    );
};

export default NotFound;
