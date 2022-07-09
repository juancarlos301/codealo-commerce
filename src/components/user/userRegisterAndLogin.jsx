import { useState, useRef, useContext } from 'react';
import axios from 'axios';

import { AppContext } from '../../context';
//css
import { Input, Button, ConButton, ButtonRegister, Form, H2, ContainerH2, P, Image, ContainerRegister } from './StylesRegister';
import Img from '../../assets/user.png'
const RegisterAndLogin = () => {

    const { setRegister, register } = useContext(AppContext)


    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [login, setLogin] = useState(true)

    const form = useRef(null)

    const ViewName = event => {
        setName(event.target.value)
    }
    const ViewPassword = event => {
        setPassword(event.target.value)
    }

    const ViewEmail = event => {
        setEmail(event.target.value)
    }
    const PostRegister = (event) => {
        event.preventDefault()
        const URL = 'https://codealo-commerce-cms.onrender.com/auth/local/register'

        axios({
            method: 'post',
            url: URL,
            data: {
                "username": name,
                "email": email,
                "password": password
            }
        })
            .then(response => {
                setRegister(true)
                setError(false)
            }).catch(e => {
                console.log(e)
                setError(true)
            })
    }

    const postLogin = (event) => {
        event.preventDefault()

        const URL = 'https://codealo-commerce-cms.onrender.com/auth/local'

        axios({
            method: 'post',
            url: URL,
            data: {
                "identifier": name,
                "password": password
            }
        })
            .then(response => {
                console.log(response.status)
                setRegister(true)
                setError(false)
            }).catch(e => {
                console.log(e)
                setError(true)
            })
    }

    const HandleRegister = () => {
        setLogin(prevState => !prevState)
        setError(false)
    }
    if (!register && login) {
        return (
            <Form ref={form} onSubmit={postLogin}>
                <ContainerH2>
                    <H2>Login</H2>
                </ContainerH2>
                <Input type="text" placeholder="User Name" name="name"
                    value={name} onChange={ViewName}
                />
                <Input type="password" placeholder="Password" name="email"
                    value={password} onChange={ViewPassword}
                />
                <ConButton>
                    <ButtonRegister onClick={() => HandleRegister()}>I am not registered</ButtonRegister>
                    <Button type='submit'>Send</Button>
                </ConButton>
                {error && <P>User name or password incorrect</P>}
            </Form>
        )

    } else if (!register && !login) {
        return (
            <Form ref={form} onSubmit={PostRegister}>
                <ContainerH2>
                    <H2>Register</H2>
                </ContainerH2>
                <Input type="text" placeholder="Name" name="name" value={name} onChange={ViewName} />
                <Input type="email" placeholder="Email" name="email" value={email} onChange={ViewEmail} />
                <Input type="password" placeholder="Password" name="email" value={password} onChange={ViewPassword} />
                <ConButton>
                    <Button type='submit'>Send</Button>
                </ConButton>
                {error && <P>User name, password or email invalid </P>}

            </Form>
        )
    } else {
        return (
            <ContainerRegister>
                <Image src={Img} alt="" />
                <ContainerH2>
                    <H2>Logged In</H2>
                </ContainerH2>
            </ContainerRegister>
        )
    }
}
export default RegisterAndLogin;