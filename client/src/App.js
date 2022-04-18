import './App.less';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'antd/dist/antd.less';
import React from 'react';
import Home from './pages/Home';
import AppliedJobs from './pages/AppliedJobs';
import PostJob from './pages/PostJob';
import Profile from './pages/Profile';
import JobInfo from './pages/JobInfo';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/appliedjobs' element={< AppliedJobs />}></Route>
          <Route exact path='/postjob' element={< PostJob />}></Route>
          <Route exact path='/profile' element={< Profile />}></Route>
          <Route exact path='/jobinfo' element={< JobInfo />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;