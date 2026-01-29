import * as React from "react";
import { useParams } from "react-router-dom";

import { usePerson } from "../api/usePerson";
import { Table } from "antd";

const Person: React.FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const person = usePerson(parseInt(id!));

    return (
        <Table
            dataSource={Object.entries(person).map(([key, value]) => ({ key, value: Array.isArray(value) ? value.join(",") : value }))}
            columns={[{ dataIndex: "key", title: "Attribute" }, { dataIndex: "value", title: "Value" }]}
        />
    );
};

export default Person;