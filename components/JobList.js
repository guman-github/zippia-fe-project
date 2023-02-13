import React from 'react';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import JobCard from './JobCard';
import CardOverview from './CardOverview';

const JobList = ({ jobs, cardLimit, textLimit }) => {
    return (
        <Container>
            <Row className='d-flex flex-column flex-md-row justify-content-between w-100 mx-0'>
                <Col xs={12} sm={6} md={3} lg={4} className='px-0'>
                    {/* Creating job card for first 10 job in job list */}
                    {jobs.length &&
                        jobs.slice(0, cardLimit).map((job) => (
                            // Create reusable component and render it
                            <JobCard key={job.jobId} job={job} textLimit={textLimit} />
                        ))}
                </Col>
                <Col xs={7} className="d-none d-lg-block jobOverviewCol px-0">
                    {
                    /* Import CardOverview Component for rendering individual job overview 
                    * @Input params (jobOverview) // For passing individual job details.
                    */
                    }
                    <CardOverview jobOverview={jobs[0]} />
                </Col>
            </Row>
        </Container>
    );
};

export default JobList;
