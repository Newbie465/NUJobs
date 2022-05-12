import "./App.less";
import { BrowserRouter, Route, Routes, useNavigate, Navigate, useLocation } from "react-router-dom";
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
import { getAllUsers } from "./redux/actions/userActions";
import UserInfo from "./pages/UserInfo";
import ProfilePage from "./pages/profilepage";


function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers())
  }, []);

  const user = localStorage.getItem('user');
  return (
    <div className="App">
      {loader && (<div className="text-center">
        <MoonLoader color={'#90000b'} />
      </div>)}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route exact path="/appliedjobs" element={<ProtectedRoute><AppliedJobs /></ProtectedRoute>}></Route>
          <Route exact path="/postjob" element={<ProtectedRoute><PostJob /></ProtectedRoute>}></Route>
          <Route exact path="/editjob/:id" element={<ProtectedRoute><EditJob /></ProtectedRoute>}></Route>
          <Route exact path="/posted" element={<ProtectedRoute><PostedJob /></ProtectedRoute>}></Route>
          <Route exact path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}></Route>
          <Route exact path="/editprofile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route>
          <Route exact path="/jobs/:id" element={<ProtectedRoute><JobInfo /></ProtectedRoute>}></Route>
          <Route exact path="/users/:id" element={<ProtectedRoute><UserInfo /></ProtectedRoute>}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoute({ children }) {
  
  const user = localStorage.getItem('user');
  const location = useLocation()

  if(!user){
    return <Navigate to='/login/' state={{ from: location }} replace></Navigate>
  }
  
  return children

}
