
import React from 'react'
import { Input, Modal, Form , Select , Button } from 'antd'
import { BsSearch } from 'react-icons/bs'
import { FaFilter } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { searchJobs, sortJobs } from "../redux/actions/jobActions";


function Filter() {

    const { Search } = Input
    const {Option} = Select;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch()

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function sort(values){

    dispatch(sortJobs(values))

    handleCancel()

 }

  return (
    <div className="flex">

        <Search enterButton='Search' size='large' style={{width: 400, color:'grey'}} onSearch={(value)=>{dispatch(searchJobs(value))}}/>
        <FaFilter style={{fontSize:20, color:'#90000b'}} className='ml-2' onClick={showModal}/>
        <Modal title="Filter" footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closable={false}>
        <Form layout='vertical' onFinish={sort}>
                <Form.Item name='experience' label='Experipence'>

                    <Select>
                        <Option value={0}>Fresher</Option>
                        <Option value={1}>1 Year</Option>
                        <Option value={2}>2 Years</Option>
                        <Option value={3}>3 Years</Option>
                        <Option value={4}>4 Years</Option>
                        <Option value={5}>5 Years</Option>

                    </Select>

                </Form.Item>

                <Form.Item name='salary' label='Salary'>

                    <Select>
                        <Option value={10000}>10000+</Option>
                        <Option value={15000}>15000+</Option>
                        <Option value={25000}>25000+</Option>
                        <Option value={35000}>35000+</Option>
                        <Option value={50000}>50000+</Option>
                        <Option value={70000}>70000+</Option>

                    </Select>

                </Form.Item>
                <Button htmlType="submit" className="job-btn">Filter</Button>
          </Form>
        </Modal>

    </div>
    

    
  )
}

export default Filter