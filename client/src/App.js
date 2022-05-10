import "./App.less";
import { BrowserRouter, Route } from "react-router-dom";
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
import Register from "./pages/register"
import Login from "./pages/login"
import PostedJob from "./pages/PostedJobs";
import EditJob from "./pages/EditJob";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  const user = localStorage.getItem('user');
  return (
    <div className="App">
      {loader && (<div className="sweet-loading text-center">
        <MoonLoader color={'#90000b'} />
      </div>)}

      <BrowserRouter>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/appliedjobs" element={<AppliedJobs />}></Route>
          <Route exact path="/postjob" element={<PostJob />}></Route>
          <Route exact path="/editjob/:id" element={<EditJob />}></Route>
          <Route exact path="/posted" element={<PostedJob />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/jobs/:id" element={<JobInfo />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute(props) {
  const user = localStorage.getItem('user');

  if(!user){
    
  }else{
    
  }

}
