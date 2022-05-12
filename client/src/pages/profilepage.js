import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { useParams, Link } from 'react-router-dom'
import { Button } from "antd";
function ProfilePage({ match }) {

  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      <DefaultLayout>
        {user && (
          <div>
            <h1>
              <b>Profile</b>
            </h1>
            <div className="JobInfo p-4 mb-3">
            <h5>
              <b>First name : </b>
              {user.firstName}
            </h5>
            <h5>
              <b>Last name : </b>
              {user.lastName}
            </h5>
            <h5>
              <b>Email : </b>
              {user.email}
            </h5>
            <h5>
              <b>Mobile Number : </b>
              {user.mobileNumber}
            </h5>
            <h5>
              <b>Address : </b>
              {user.address}
            </h5>

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
           
            <Link to={`/editprofile`}><Button className="job-btn edit">Edit</Button></Link>
            

          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default ProfilePage;