import React, {useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {Row, Col, Form, Tabs, Input, Button, Select} from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { updateUser} from "../redux/actions/userActions"
import { editJob } from '../redux/actions/jobActions'
const { TabPane } = Tabs;
const {Option} = Select
function EditJob({match}) {

  const dispatch = useDispatch()
  const[activetab, setActiveTab] = useState('1')
  const[jobInfo, setJobInfo] = useState({})
  const { id } = useParams()
  function firstFormFinish(values){
    setJobInfo(values)
    setActiveTab('2')
  }

  function onFinalFisnish(values){
    const finalObj = {...jobInfo, ...values}
    finalObj._id = id
    console.log(finalObj)
    dispatch(editJob(finalObj))
  }

  const { jobs }  = useSelector(state=>state.jobsReducer)

  const job = jobs.find(job=>job._id==id)

  return (
    <div className="profile">
        <DefaultLayout>

        <h1><b>Edit Job</b></h1>
        <Tabs defaultActiveKey="1" activeKey={activetab}>
          <TabPane tab="Job Info" key="1" className = 'tabs'>
            <Form layout='vertical' onFinish={firstFormFinish} initialValues={job}>
              <Row gutter={[16, 16]}>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Title' required rules={[{required : true}]} name='title'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Department' required rules={[{required : true}]} name='department'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Experience' required rules={[{required : true}]} name='experience'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Salary From' required rules={[{required : true}]} name='salaryFrom'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Salary To' required rules={[{required : true}]} name='salaryTo'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Skills' required rules={[{required : true}]} name='skillsRequired'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Minimum Qualifications' required rules={[{required : true}]} name='minimumQualification'>
                    <Select>
                      <Option value='Degree'>Degreee</Option>
                      <Option value='Plus 2'>Plus 2</Option>
                      <Option value='10th'>10th</Option>
                    </Select>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={24} sm={24}>
                  
                  <Form.Item label='Brief Discription' required rules={[{required : true}]} name='smallDescription'>
                    <TextArea rows={2}/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={24} sm={24}>
                  
                  <Form.Item label='Detailed Description' required rules={[{required : true}]} name='fullDescription'>
                    <TextArea rows={4}/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Form.Item >
                
                <Button type="primary" className='job-btn' htmlType='submit'>
                  Next
                </Button>
                            
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Company Info" key="2" className = 'tabs'>
            <Form  initialValues={job} layout='vertical' onFinish={onFinalFisnish}>
            <Row gutter={[16, 16]}>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Company Name' required rules={[{required : true}]} name='company'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Email' required rules={[{required : true}]} name='email'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Phone Number' required rules={[{required : true}]} name='phoneNumber'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={24} sm={24}>
                  
                  <Form.Item label='Company Description' required rules={[{required : true}]} name='companyDescription'>
                    <TextArea rows={4}/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Button onClick = {()=>{setActiveTab('1')}} className='job-btn mr-2'>
                  Previous
                </Button>
                <Button htmlType='submit' className='job-btn'>
                  Edit Job
                </Button>
                            
              
            </Form>
          </TabPane>
        </Tabs>
            
        </DefaultLayout>
    </div>
  )
}

export default EditJob