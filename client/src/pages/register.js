import React from "react"
import { Row, Col, Form, Input, Button, message, Checkbox } from 'antd';
import { useDispatch} from 'react-redux';
import { registerUser } from "../redux/actions/userActions";

function Register(){

    const dispatch = useDispatch();
    function register(values){
        if(values.password != values.confirmPassword){
            message.error("Password Not matching")
        }else{
            console.log(values)
            dispatch(registerUser(values))
        }
    }


    return (
        <div>
            <Row>
                <Col lg = {17} sm = {24} >
                    <div className="loginLogo">
                    </div>
                </Col>
                <Col lg = {7}  sm = {24} className="loginForm" >
                    <div className="login">
                        <b><h1 style={{textAlign:"center", fontSize:"60px"}}>Register</h1></b>
                        <Form
                            layout="vertical"
                            onFinish = {register}
                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Password"/>
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Confirm Password"/>
                        </Form.Item>

                        <Form.Item name="isRecruiter" valuePropName="checked" >
                            <Checkbox>Are you a Recruiter?</Checkbox>
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                            </Button>
                            <p>Already have an account! <a href="/login">Login</a></p>
                        </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
            
        </div>
    )
}

export default Register