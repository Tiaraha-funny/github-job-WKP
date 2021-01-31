import React, { useContext } from 'react';
import { DisplayJobs } from '../components';
import { Container } from '../components/displayGithubJobs/styles/displayGithubJobs';
import { GlobalContexts } from '../globalContext';

export default function DisplayGithubJobsContainer() {
    const { jobs, loading } = useContext(GlobalContexts);

    return (
        <>
        {loading && <h1>Loading...</h1>}
            {jobs.map((job) => (<Container key={job.id}>
                <DisplayJobs.Image src={job.company_logo} />
                <DisplayJobs.Cover>
                    <div>{job.company}</div>
                    <div>{job.title}</div>
                    <button>{job.type}</button>
                </DisplayJobs.Cover>
                <DisplayJobs.LocationsAndDates>
                    <div>{job.location}</div>
                    <div>{job.created_at}</div>
                </DisplayJobs.LocationsAndDates>
            </Container>))}
        </>
    )
}
