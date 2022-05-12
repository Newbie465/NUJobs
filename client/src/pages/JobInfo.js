import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { Row, Col, Button, Tag } from "antd";
import { Link } from 'react-router-dom'
import moment from "moment";
import { applyJob } from '../redux/actions/jobActions';


function JobInfo({ match }) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { jobs } = useSelector(state=>state.jobsReducer)

  const job = jobs.find(job=>job._id == id)

  const uid = JSON.parse(localStorage.getItem('user'))._id

  function applyNow(){

    dispatch(applyJob(job))

  }

  const appliedCandidates = job.appliedCandidates;

  const alreadyApplied = appliedCandidates.find(
    (candidate) => candidate.userid == uid
  )

  return (
    <div>
        <DefaultLayout>
            <h1><b>Job Info</b></h1>
            <div className = "JobInfo p-3">
              <h1><b>{job.title}</b></h1>
              <p>{job.company}</p>
              <p>{job.fullDescription}</p>
              <hr/>
              <h3><b>Skills</b></h3>
              <p>{job.skillsRequired}</p>
              <br></br>
              <h3><b>Minimum Qualifications</b></h3>
              <p>{job.minimumQualification}</p>
              <br></br>
              <h3><b>Salary</b></h3>
              <p>{job.salaryFrom}-{job.salaryTo}</p>


            </div>
            <div className="flex justify-content-between mt-4">
                      <span>
                        {job.postedBy==uid ? (
                        <Link to={`/editjob/${job._id}`}><Button className="job-btn">Edit</Button></Link>
                        ) : alreadyApplied ? (
                          <Tag color="green">Already Applied</Tag>
                        ) : (
                        <Button className="job-btn" onClick={applyNow}>Apply</Button>
                        )}
                        <Link to = {`/`}><Button className="job-btn-back ml-2">Back</Button></Link>
                      </span>
                      <p>Posted On : {moment(job.createdAt).format('MMM DD yyyy')}</p>
              </div>
        </DefaultLayout>
    </div>
  )
}

export default JobInfo