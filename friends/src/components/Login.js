import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Box, Form, FormField, Button, Heading} from 'grommet';
import axiosWithAuth from '../utils/AxiosWithAuth';

const Login = (props) => {
    let history = useHistory();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('api/login', credentials)
            .then(res => {
                window.localStorage.setItem('token', res.data.payload)
                history.push('/friendslist')
            })
            .catch(err => console.error(err))
    }

    return (
        <Box flex direction='row' justify='center' pad={{vertical: '180px'}}>
            <Form onSubmit={(e) => login(e)}>
                <FormField name="username" label="Username" onChange={(e) => handleChange(e)} />
                <FormField name="password" label="Password" onChange={(e) => handleChange(e)} type='password' />
                <Button type="submit" primary label="Submit" />
            </Form>
        </Box>
    )
}

export default Login;