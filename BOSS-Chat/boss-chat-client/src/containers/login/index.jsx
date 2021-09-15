/*
登陆的路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {login} from "../../redux/actions";
import Logo from '../../components/logo/logo'

import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile'


class Login extends Component {
    state = {
        username: '',  // 用户名
        password: '',  // 密码
    }

    login = () => {
        this.props.login(this.state)
    }

    // 处理输入数据的改变: 更新对应的状态
    handleChange = (name, val) => {
        // 更新状态
        this.setState({
            [name]: val  // 属性名不是name, 而是name变量的值
        })
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    render() {
        const {msg, redirectTo} = this.props
        if (redirectTo) {
            return <Redirect to={redirectTo}/>
        }
        return (
            <div>
                <NavBar>B&nbsp;0&nbsp;S&nbsp;S&nbsp;直&nbsp;聘</NavBar>
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
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;陆</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => state.user,
    {login}
)(Login)
