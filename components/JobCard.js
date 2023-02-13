import React from 'react';
import ExpandText from './ExpandText';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

/**
 * Create a reusable component a job card
 * @param {*} job : a single job
 * @param {*} textLimit : text limit of description
 * @returns
 */
const JobCard = ({ job, textLimit }) => {
    return (
        <Col className="jobCol" lg={3} md={4} sm={6} xs={12}>
            <Card>
                <Card.Body>
                    <Card.Title className="truncate-title">{job.jobTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{job.companyName}</Card.Subtitle>
                    <div>
                        {/* use a component for substring the long text and get readmore & readless option  */}
                        <ExpandText content={job.jobDescription} limit={textLimit} />
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default JobCard;
