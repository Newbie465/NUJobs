import { Modal, Table } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import moment from "moment";
import { AiFillEdit } from 'react-icons/ai'
import { FaListAlt } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'

function PostedJob() {
  const alljobs = useSelector(state=>state.jobsReducer).jobs
  const allusers = useSelector((state) => state.usersReducer).users;
  const userid = JSON.parse(localStorage.getItem('user'))._id
  const userJobs = alljobs.filter((job)=>job.postedBy==userid)
  const history = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState();

  

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Applied Candidates",
      dataIndex: "appliedCandidates",
    },
    {
      title: 'Action',
      render: (text, data)=>{
        return <div className='flex'>
            <AiFillEdit style={{fontSize:20}} onClick={() => {
                history(`/editjob/${data.completeJobData._id}`);
              }} className='mr-2' />
            <FaListAlt style={{fontSize:20}} onClick = {()=>{showModal(data.completeJobData)}}/>
        </div>
      }
    }
  ]

  const dataSource = []

  for(var job of userJobs){
    var obj = {
      title: job.title,
      company: job.company,
      postedOn: moment(job.createdAt).format("MMM DD yyyy"),
      appliedCandidates: job.appliedCandidates.length,
      completeJobData: job,
    };
    dataSource.push(obj);
  }

  const showModal = (jobs) => {
    setIsModalVisible(true);
    setSelectedJob(jobs);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function CandidatesList(){
    const candidatesColumns = [
      {
        title: "Candidate Id",
        dataIndex: "candidateId",
        render : (text ,data)=>{
         return <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
        }
      },
      {
        title: "Full Name",
        dataIndex: "fullName",
      },
      { 
        title: "Applied Date", 
        dataIndex: "appliedDate" 
      },
    ];
  
    var candidatesDatasource = [];
  
    for (var candidate of selectedJob.appliedCandidates) {
      var user = allusers.find((user) => user._id == candidate.userid);
      
      var obj = {
        candidateId: user._id,
        fullName: user.firstName + " " + user.lastName,
        appliedDate: candidate.appliedDate,
      };

      candidatesDatasource.push(obj);
      
    }
    return <Table
    columns={candidatesColumns}
    dataSource={candidatesDatasource}
  />
   }

  
  return (
    <div>
        <DefaultLayout>
            <h1><b>Dashboard</b></h1>
            <Table columns={columns} dataSource={dataSource} />
            <Modal title="Applied Candidates" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={800} closable={false}>
              <CandidatesList/>
            </Modal>
        </DefaultLayout>
    </div>
  )
}

export default PostedJob