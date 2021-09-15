import React, {Component} from 'react';
import Logo from '../../components/logo/logo'

import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from "../../redux/actions";

import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'

const ListItem = List.Item

class Register extends Component {

    state = {
        username: '',  // 用户名
        password: '',  // 密码
        password2: '',  // 确认密码
        type: 'boss'  // 用户类型名称   worker/boss
    }

    // 处理输入数据的改变: 更新对应的状态
    handleChange = (name, val) => {
        // 更新状态
        this.setState({
            [name]: val  // 属性名不是name, 而是name变量的值
        })
    }
    // 点击注册调用
    register = () => {
        // console.log(JSON.stringify(this.state))
        this.props.register(this.state)
    }
    // 点击跳转登陆
    toLogin = () => {
        this.props.history.replace('/login')
    }

    render() {
        const {type} = this.state
        const {redirectTo, msg} = this.props
        if (redirectTo) {
            return <Redirect to={redirectTo}/>
        }

        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>
                    {msg ? <p className='error-msg'>{msg}</p> : null}
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入用户名' onChange={val => {
                            this.handleChange('username', val)
                        }}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入密码' type="password" onChange={val => {
                            this.handleChange('password', val)
                        }}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder='请输入确认密码' type="password" onChange={val => {
                            this.handleChange('password2', val)
                        }}>确认密码:</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>用户类型:</span>
                            &nbsp;&nbsp;&nbsp;
                            <Radio checked={type === 'boss'}
                                   onChange={() => this.handleChange('type', 'boss')}>Boss</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type === 'worker'}
                                   onClick={() => this.handleChange('type', 'worker')}>Worker</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }

}

export default connect(
    state => state.user,
    {register}
)(Register)
