import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../redux/actions/jobActions";
import { Row, Col } from "antd";

function Home() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <div>
      <DefaultLayout>
        <Row>
          {jobs.map((job) => {
            return <Col lg={12} sm={24}>
              <div className="job-div">
                  <h4>{job.title}</h4>
                  <p>{job.company}</p>
                  <hr/>
                  <p>{job.smallDescription}</p>
                  <div className="flex">
                  <p>Salary : <b>{job.salaryFrom} - {job.salaryTo}</b></p>
                  <p style={{ marginLeft: 20 }}>Exprience : <b>{job.experience} Years</b></p>
                  </div>
              </div>
            </Col>;
          })}
        </Row>

        {jobs.map((job) => {
          <Col lg={12} sm={24}></Col>;
        })}
      </DefaultLayout>
    </div>
  );
}

export default Home;
