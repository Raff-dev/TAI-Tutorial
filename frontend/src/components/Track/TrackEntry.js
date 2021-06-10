import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { StyledLink } from "../../util/Theme";
import { Api } from "../../util/Api";

const TrackEntry = ({ track }) => {
    const { id, title, length, track_format } = track;

    return (
        <Card className="m-3 text-muted">
            <Card.Header className="text-primary">
                <StyledLink to={"/Tracks/" + id}>{title}</StyledLink>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <p>Length: {length}</p>
                    <p>Format: {track_format}</p>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default TrackEntry;
