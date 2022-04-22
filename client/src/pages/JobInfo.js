import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'

function JobInfo({ match }) {
  const { id } = useParams()
  const { jobs } = useSelector(state=>state.jobsReducer)

  const job = jobs.find(job=>job._id == id)
  return (
    <div>
        <DefaultLayout>
            <h1><b>Job Info</b></h1>
            <div className = "JobInfo">
              <h1><b>{job.title}</b></h1>
              <p>{job.company}</p>
              <p>{job.fullDescription}</p>
              <h4><b>Skills</b></h4>
              <p>{job.skillsRequired}</p>
              <h4><b>Minimum Qualifications</b></h4>
              <p>{job.minimumQualification}</p>

            </div>
        </DefaultLayout>
    </div>
  )
}

export default JobInfo