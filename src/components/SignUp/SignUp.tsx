import React from "react";
import { Input, Tooltip, Icon, Button } from "antd";
import axios from '../../config/axios'

interface ISignUpstate {
    account: string,
    password: string,
    passwordConformation: string
}

class SignUp extends React.Component<any,ISignUpstate> {
    constructor(props){
        super(props)
        this.state = {
            account: '',
            password: '',
            passwordConformation: ''
        }
    }

    submit = async () => {
        const {account, password, passwordConformation} = this.state;
        try{
            await axios.post( 'sign_up/user', {
                account,
                password,
                password_confirmation: passwordConformation,
            })
            console.log('成功')
        } catch(e){
            throw new Error(e)
        }
    }

    public render(){
        const { account, password, passwordConformation } = this.state;
        return (
            <div className="SignUp">
                <Input
                    placeholder="请输入用户名"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    value={account}
                    suffix={
                        <Tooltip title="Extra information">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
                <Input.Password value={password} placeholder="请输入密码" />
                <Input.Password value={passwordConformation} placeholder="请确认密码" />
                <Button onClick={this.submit}>注册</Button>
            </div>
        );
    }



}

export default SignUp;