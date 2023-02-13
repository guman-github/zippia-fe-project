import { useState } from 'react';
import JobList from '../../../components/JobList.js';
import axios from 'axios';
import Spinner from '../../../components/Loader.js';
import Button from 'react-bootstrap/Button';

// Zippia API URL
const API_URL = 'https://www.zippia.com/api/jobs/';

//API payloads
const data = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: 'Business Analyst',
    locations: [],
    numJobs: 20,
    previousListingHashes: []
};
/**
 * Our main component with name Jobs
 * @param {*} jobList
 * @returns
 */
const Jobs = ({ jobList }) => {
    //Using state hook for saving state
    const [myJobs, setMyJobs] = useState(jobList.jobs);
    const [showLoading, updateLoading] = useState(false);
    //Currently I have not provided option to update number of jobs showing but it can be done easily
    const [cardLimit] = useState(10);
    //Using state to store active filter
    const [pastWeekFilterActive, setPastWeekFilterActive] = useState(false);
    const [companyNameFilterActive, setCompanyNameFilterActive] = useState(false);
    const [clearActive, setclearActive] = useState(true);

    /*
     * This method fetch past 7 days job
     * I assume that there is a payload with name {postedDate} that gives a response of last 7 days
     */
    const getPastWeekJob = () => {
        //Updating past seven days filter state
        setPastWeekFilterActive(true);
        setCompanyNameFilterActive(false);
        setclearActive(false);
        //showing loading screen
        updateLoading(true);

        //fetching jobs from API
        axios.post(API_URL, { postedDate: '7d', ...data }).then((res) => {
            setMyJobs(res.data.jobs);
            updateLoading(false);
        });
    };

    const getCompanyName = () => {
        //Updating past seven days filter state
        setCompanyNameFilterActive(true);
        setPastWeekFilterActive(false);
        setclearActive(false);
        //showing loading screen
        updateLoading(true);
        //fetching jobs from API
        axios.post(API_URL, { postedDate: '7d', ...data }).then((res) => {
            setMyJobs(res.data.jobs);
            updateLoading(false);
        });
    };

    /*
     * This method is used to clear applied filter
     */
    const defaultUI = () => {
        //Updating past seven days filter state
        setCompanyNameFilterActive(false);
        setPastWeekFilterActive(false);
        setclearActive(true);
        //showing loading screen
        updateLoading(true);
        //fetching jobs from API
        axios.post(API_URL, data).then((res) => {
            setMyJobs(res.data.jobs);
            updateLoading(false);
        });
    };

    return (
        <div className="bg_main">
            <div className="container">
                <h1 className="main_color">Nearest Jobs</h1>
                {/* </div> */}
                <hr />
                {/* <div className="container"> */}
                <Button className={clearActive ? 'newBtn_selected' : ' newBtn_unselected'} onClick={defaultUI}>
                    Default
                </Button>{' '}
                <Button
                    className={pastWeekFilterActive ? 'newBtn_selected m-2' : ' newBtn_unselected m-2'}
                    // variant={pastWeekFilterActive ? 'primary' : 'secondary'}
                    onClick={getPastWeekJob}
                >
                    Last 7 Days
                </Button>{' '}
                <Button
                    className={companyNameFilterActive ? 'newBtn_selected' : ' newBtn_unselected'}
                    onClick={getCompanyName}
                >
                    Company Name
                </Button>
            </div>
            {
                //Showing loading if jobs are not fetched yet
                showLoading ? <Spinner /> : <JobList jobs={myJobs} cardLimit={cardLimit} textLimit={140} />
            }
        </div>
    );
};

/**
 * This method is used for server side rendering props fetch
 *
 */
export async function getServerSideProps() {
    //Fetching job list from api
    const response = await axios.post(API_URL, data);

    //Return job list as props
    return {
        props: {
            jobList: response.data
        }
    };
}

export default Jobs;
