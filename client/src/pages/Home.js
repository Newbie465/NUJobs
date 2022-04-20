import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../redux/actions/jobActions";
import { Row, Col, Button } from "antd";
import { Link } from 'react-router-dom'
import moment from "moment";

function Home() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <div>
      <DefaultLayout>
        <Row gutter={[16, 16]}>
          {jobs.map((job) => {
            return <Col lg={8} sm={24}>
              <div className="job-div bs m-1 p-3">
                  <p className = "title">{job.title}</p>
                  <p className = "company">{job.company}</p>
                  <hr/>
                  <p>{job.smallDescription}</p>
                  {/* <div className = "description">
                  <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                  </div> */}
                  <div className="flex">
                  <p>Salary : <b>{job.salaryFrom} - {job.salaryTo}</b></p>
                  <p style={{ marginLeft: 20 }}>Exprience : <b>{job.experience} Years</b></p>
                  </div>
                  <hr/>
                  <div className="flex justify-content-between">
                      <Link to = {`/jobs/${job._id}`}><Button className="job-btn">View</Button></Link>
                      <p>Posted On : {moment(job.createdAt).format('MMM DD yyyy')}</p>
                  </div>
              </div>
            </Col>;
          })}
        </Row>
      </DefaultLayout>
    </div>
  );
}

export default Home;
