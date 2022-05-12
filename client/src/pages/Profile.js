import React, {useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import {Row, Col, Form, Tabs, Input, Button} from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { updateUser} from "../redux/actions/userActions"
const { TabPane } = Tabs;

function Profile() {

  const[personalInfo, setPersonalInfo]=useState()
  const[activetab, setActiveTab] = useState('1')
  const dispatch = useDispatch()
  function onPersonInfoSubmit(values){
    setPersonalInfo(values)
    console.log(values)
    setActiveTab('2')
  }

  function onFinalFisnish(values){
    const finalObj = {...personalInfo, ...values}
    console.log(finalObj)
    dispatch(updateUser(finalObj))
  }

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className='profile'>
        <DefaultLayout>
        <h1><b>Profile</b></h1>
        <Tabs defaultActiveKey="1" activeKey={activetab}>
          <TabPane tab="Personal Info" key="1" className = 'tabs'>
            <Form layout='vertical' onFinish={onPersonInfoSubmit} initialValues={user}>
              <Row gutter={[16, 16]}>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='First Name' required rules={[{required : true}]} name='firstName'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Last Name' required rules={[{required : true}]} name='lastName'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Email' required rules={[{required : true}]} name='email'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Mobile Number' required rules={[{required : true}]} name='mobileNumber'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={8} sm={24}>
                  
                  <Form.Item label='Porfolio' required rules={[{required : true}]} name='portfolio'>
                    <Input/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={24} sm={24}>
                  
                  <Form.Item label='About' required rules={[{required : true}]} name='about'>
                    <TextArea rows={4}/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={24} sm={24}>
                  
                  <Form.Item label='Address' required rules={[{required : true}]} name='address'>
                    <TextArea/>
                  </Form.Item>
                    
                </Col>
              </Row>
              <Form.Item >
                
                <Button type="primary" htmlType="submit" className='job-btn'>
                  Next
                </Button>
                            
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Skills and Education" key="2" className = 'tabs'>
            <Form  initialValues={user} layout='vertical' onFinish={onFinalFisnish}>
              <Row>
                <Col lg={24} sm={24}>
                  <Form.List name='education'>
                      {(education, {add, remove})=>(
                        <div>
                          {education.map((field, index) =>(
                            <div className="flex">
                              <Form.Item {...field} label = "Education:" style={{width:'90%', marginRight:'10px'}} required rules={[{required : true}]}>
                                <TextArea rows={2} />
                              </Form.Item>
                              <Button className='job-btn mr-2' onClick={()=>{add()}}>+</Button>
                              {index !== 0 && (<Button className='job-btn mr-2' onClick={()=>{remove(index)}}>-</Button>)}
                            </div>
                          ))}
                        </div>
                      )}
                  </Form.List>
                </Col>
                <Col lg={24} sm={24}>
                  <Form.List name='skills'>
                      {(skills, {add, remove})=>(
                        <div>
                          {skills.map((field, index) =>(
                            <div className="flex">
                              <Form.Item {...field} label = 'Skills ' style={{width:'90%', marginRight:'10px'}} required rules={[{required : true}]}>
                                <TextArea rows={2} />
                              </Form.Item>
                              <Button className='job-btn mr-2' onClick={()=>{add()}}>+</Button>
                              {index !== 0 && (<Button className='job-btn mr-2' onClick={()=>{remove(index)}}>-</Button>)}
                            </div>
                          ))}
                        </div>
                      )}
                  </Form.List>
                </Col>
                <hr/>
                <Col lg={24 } sm={24}>
                  <Form.List name='projects'>
                      {(projects, {add, remove})=>(
                        <div>
                          {projects.map((field, index) =>(
                            <div className="flex">
                              <Form.Item {...field} label = 'Projects ' style={{width:'90%', marginRight:'10px'}} required rules={[{required : true}]}>
                                <TextArea rows={2} />
                              </Form.Item>
                              <Button className='job-btn mr-2' onClick={()=>{add()}}>+</Button>
                              {index !== 0 && (<Button className='job-btn mr-2' onClick={()=>{remove(index)}}>-</Button>)}
                            </div>
                          ))}
                        </div>
                      )}
                  </Form.List>
                </Col>
                <Col lg={24 } sm={24}>
                  <Form.List name='experience'>
                      {(experience, {add, remove})=>(
                        <div>
                          {experience.map((field, index) =>(
                            <div className="flex">
                              <Form.Item {...field} label = 'Experience ' style={{width:'90%', marginRight:'10px'}} required rules={[{required : true}]}>
                                <TextArea rows={2} />
                              </Form.Item>
                              <Button className='job-btn mr-2' onClick={()=>{add()}}>+</Button>
                              {index !== 0 && (<Button className='job-btn mr-2' onClick={()=>{remove(index)}}>-</Button>)}
                            </div>
                          ))}
                        </div>
                      )}
                  </Form.List>
                </Col>
              </Row>
             
                
                <Button onClick = {()=>{setActiveTab('1')}} className='job-btn mr-2'>
                  Previous
                </Button>
                <Button htmlType='submit' className='job-btn'>
                  Update
                </Button>
                            
              
            </Form>
          </TabPane>
        </Tabs>
        </DefaultLayout>
    </div>
  )
}

export default Profile