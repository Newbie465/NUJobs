import "./App.less";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/antd.less";
import React , { useEffect } from "react";
import Home from "./pages/Home";
import AppliedJobs from "./pages/AppliedJobs";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
import JobInfo from "./pages/JobInfo";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "./redux/actions/jobActions";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <div className="App">
      {loader && (<div className="sweet-loading text-center">
        <MoonLoader color={'#90000b'} />
      </div>)}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>                   //Home Page
          <Route exact path="/appliedjobs" element={<AppliedJobs />}></Route> //Applied Jobs Page
          <Route exact path="/postjob" element={<PostJob />}></Route>         //Post Jobs Page
          <Route exact path="/profile" element={<Profile />}></Route>         //User Profile
          <Route exact path="/jobs/:id" element={<JobInfo />}></Route>        //Jobs Page
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
