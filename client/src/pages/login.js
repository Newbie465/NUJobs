import React from "react"
import { Row, Col, Form, Input, Button, } from 'antd';
import { useDispatch} from 'react-redux';
import { loginUser } from "../redux/actions/userActions";


function Login(){
    const dispatch = useDispatch();
    function login(values){
        dispatch(loginUser(values));
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
                        <b><h1 style={{textAlign:"center", fontSize:"60px"}}>Login</h1></b>
                        <Form
                            layout="vertical"
                            onFinish={login}
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

                        <Form.Item >
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
                            </Button>
                            <p>Dont have an Account! <a href="/register">Register now!</a></p>
                        </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
            
        </div>

    )
}

export default Login