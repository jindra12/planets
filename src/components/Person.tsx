import * as React from "react";
import { useParams } from "react-router-dom";
import { Flex, Table } from "antd";

import { usePerson } from "../api/usePerson";
import { Loader } from "./Loader";

const Person: React.FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const person = usePerson(parseInt(id!));

    return (
        <Loader query={person}>
            {(person, refresh) => (
                <Table
                    dataSource={Object.entries(person).map(([key, value]) => ({ key, value: Array.isArray(value) ? value.join(", ") : value }))}
                    columns={[{ dataIndex: "key", title: "Attribute" }, { dataIndex: "value", title: "Value" }]}
                    footer={() => (
                        <Flex justify="end">
                            {refresh}
                        </Flex>
                    )}
                />
            )}
        </Loader>
    );
};

export default Person;