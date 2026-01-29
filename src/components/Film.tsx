import * as React from "react";
import { useParams } from "react-router-dom";
import { Card, List, Typography } from "antd";

import { useFilm } from "../api/useFilm";
import { Loader } from "./Loader";

const Film: React.FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const film = useFilm(parseInt(id!));
    return (
        <Loader query={film}>
            {(film) => (
                <Card
                    title={<Typography.Title level={1}>{film.title}</Typography.Title>}
                >
                    <Card.Meta description={film.opening_crawl} />
                    <List
                        dataSource={film.characters}
                        header="Characters"
                        renderItem={(character) => (
                            <List.Item>
                                {character}
                            </List.Item>
                        )}
                        pagination={{ pageSize: 5 }}
                    />
                </Card>
            )}
        </Loader>
    );
};

export default Film;