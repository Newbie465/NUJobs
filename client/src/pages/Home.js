import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {useSelector, useDispatch} from 'react-redux'
function Home() {
  const jobsdata = useSelector(state=>state.jobsReducer)
  return (
    <div>
       <DefaultLayout>
            <h1>Home page</h1>
        </DefaultLayout> 
    </div>
  )
}

export default Home

