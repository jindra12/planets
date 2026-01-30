import * as React from "react";
import { Button, Result } from "antd";

import { getErrorMessage } from "../utils";

const NotFound: React.FunctionComponent = () => {
    return (
        <Result
            status={404}
            title={getErrorMessage(404)}
            subTitle={<Button type="primary" href="/">Back to homepage</Button>}
        />
    );
};

export default NotFound;
