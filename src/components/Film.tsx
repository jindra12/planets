import * as React from "react";
import { useParams } from "react-router-dom";
import { Card, Flex, List, Typography } from "antd";

import { useFilm } from "../api/useFilm";
import { Loader } from "./Loader";
import { getPersonUrl } from "../utils";
import { RouteLink } from "./RouteLink";

const Film: React.FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const film = useFilm(parseInt(id!));
    return (
        <Loader query={film}>
            {(film, refresh) => (
                <Card
                    title={(
                        <Flex justify="space-between" align="center" wrap gap="8px">
                            <Typography.Title level={1}>{film.title}</Typography.Title>
                            <Flex justify="end">
                                {refresh}
                            </Flex>
                        </Flex>
                    )}
                >
                    <Card.Meta description={film.opening_crawl} />
                    <List
                        dataSource={film.characters}
                        header="Characters"
                        renderItem={(character) => (
                            <List.Item>
                                <RouteLink href={getPersonUrl(character)}>
                                    {character}
                                </RouteLink>
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