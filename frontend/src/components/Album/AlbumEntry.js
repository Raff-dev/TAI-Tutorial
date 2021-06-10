import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { StyledLink } from "../../util/Theme";
import { Api } from "../../util/Api";

const AlbumEntry = ({ album }) => {
    const { id, artist, title, release_date, genre, producer, studio } = album;

    return (
        <Card className="m-3 text-muted">
            <Card.Header className="text-primary">
                <StyledLink to={"/Albums/" + id}>
                    {artist} - {title}
                </StyledLink>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <p>Producer: {producer}</p>
                    <p>Release Date: {release_date}</p>
                    <p>Genre: {genre}</p>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default AlbumEntry;
