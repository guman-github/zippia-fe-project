import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import JobCard from './JobCard';

const JobList = ({ jobs, cardLimit, textLimit }) => {
    return (
        <Container>
            <Row md={3} sm={6} xs={12}>
                {/* Creating job card for first 10 job in job list */}
                {jobs.length &&
                    jobs.slice(0, cardLimit).map((job) => (
                        // Create reusable component and render it
                        <JobCard key={job.jobId} job={job} textLimit={textLimit} />
                    ))}
            </Row>
        </Container>
    );
};

export default JobList;
