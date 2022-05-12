import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { Row, Col, Button } from "antd";
import { Link } from 'react-router-dom'
import moment from "moment";

function JobInfo({ match }) {
  const { id } = useParams()
  const { jobs } = useSelector(state=>state.jobsReducer)

  const job = jobs.find(job=>job._id == id)

  const uid = JSON.parse(localStorage.getItem('user'))._id
  return (
    <div>
        <DefaultLayout>
            <h1><b>Job Info</b></h1>
            <div className = "JobInfo p-3">
              <h1><b>{job.title}</b></h1>
              <p>{job.company}</p>
              <p>{job.fullDescription}</p>
              <hr/>
              <h4><b>Skills</b></h4>
              <p>{job.skillsRequired}</p>
              <br></br>
              <h4><b>Minimum Qualifications</b></h4>
              <p>{job.minimumQualification}</p>
              <br></br>
              <h4><b>Salary</b></h4>
              <p>{job.salaryFrom}-{job.salaryTo}</p>


            </div>
            <div className="flex justify-content-between mt-4">
                      <span>
                        {job.postedBy==uid ? (<Link to={`/editjob/${job._id}`}><Button className="job-btn">Edit</Button></Link>) : (<Button className="job-btn">Apply</Button>)}
                        <Link to = {`/`}><Button className="job-btn-back ml-2">Back</Button></Link>
                      </span>
                      <p>Posted On : {moment(job.createdAt).format('MMM DD yyyy')}</p>
              </div>
        </DefaultLayout>
    </div>
  )
}

export default JobInfo