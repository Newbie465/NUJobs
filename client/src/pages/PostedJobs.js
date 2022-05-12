import { Modal, Table } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  EditOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { Link, useHistory } from "react-router-dom";

function PostedJob() {
  const alljobs = useSelector(state=>state.jobsReducer).jobs
  const userid = JSON.parse(localStorage.getItem('user'))._id
  const userjobs = alljobs.filter(job=>job.postedBy==userid)
  const history = useHistory();

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
            <EditOutlined onClick={() => {
                history(`/editjob/${data.completeJobData._id}`);
              }} />
        </div>
      }
    }
  ]

  const dataSource = []

  for(var job of userjobs){
    var obj = {
      title: job.title,
      company: job.company,
      postedOn: moment(job.createdAt).format("MMM DD yyyy"),
      appliedCandidates: job.appliedCandidates.length,
      completeJobData: job,
    };
    dataSource.push(obj);
  }

  console.log(userjobs)
  return (
    <div>
        <DefaultLayout>
            <h1><b>Posted Job</b></h1>
            <Table columns={columns} dataSource={dataSource} />
        </DefaultLayout>
    </div>
  )
}

export default PostedJob