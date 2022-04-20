import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useParams } from 'react-router-dom'

function JobInfo({ match }) {
  const { id } = useParams()
  return (
    <div>
        <DefaultLayout>
            <h1>Job Info</h1>
            { id }
        </DefaultLayout>
    </div>
  )
}

export default JobInfo