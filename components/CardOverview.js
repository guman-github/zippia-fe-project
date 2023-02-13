import React from 'react';
import Card from 'react-bootstrap/Card';

// Returing Job Overview Component
const CardOverview = (job) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{job.jobOverview.jobTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.jobOverview.companyName}</Card.Subtitle>
                <Card.Text>{job.jobOverview.jobDescription}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardOverview;
