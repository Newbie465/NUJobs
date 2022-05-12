import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom'
import { Button } from "antd";
function UserInfo({ match }) {

  const { id } = useParams()
  const { users } = useSelector((state) => state.usersReducer);
  const uid = JSON.parse(localStorage.getItem('user'))._id
  const user = users.find((user) => user._id == id);
  return (
    <div>
      <DefaultLayout>
        {user && (
          <div>
            <h3>
              <b>Personal information</b>
            </h3>
            <div className="JobInfo p-4">
            <p>
              <b>First name : </b>
              {user.firstName}
            </p>
            <p>
              <b>Last name : </b>
              {user.lastName}
            </p>
            <p>
              <b>Email : </b>
              {user.email}
            </p>
            <p>
              <b>Mobile Number : </b>
              {user.mobileNumber}
            </p>
            <p>
              <b>Address : </b>
              {user.address}
            </p>

            <hr />
            <h3>
              <b>Skills</b>
            </h3>

            {user.skills.map((skill) => {
              return <li>{skill}</li>;
            })}

            <hr />
            <h3>
              <b>Education</b>
            </h3>
            {user.education.map((education) => {
              return <li>{education}</li>;
            })}
            <hr />

            <h3>
              <b>Projects</b>
            </h3>
            {user.projects.map((project) => {
              return <li>{project}</li>;
            })}

            <hr />
            <h3>
              <b>Experience</b>
            </h3>
            {user.experience.map((experience) => {
              return <li>{experience}</li>;
            })}
            </div>
            {id==uid && (
                        <Link to={`/profile`}><Button className="job-btn">Edit</Button></Link>
            )}

          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default UserInfo;