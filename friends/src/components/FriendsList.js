import React, {useEffect, useState} from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';

import {Box, Text, Form, Button, TextInput, Heading} from 'grommet';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setFriends(res.data))

    }, [])

    const handleChange = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = (e) => {
        e.preventDefault()

        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => setFriends(res.data))
    }

    return (
        <Box flex direction='column' align='center'>
            <Box width='small'>
                <Heading>Friends List</Heading>
                <Form direction='column' align='center' pad='medium' onSubmit={(e) => {addFriend(e)}}>
                    <TextInput size='xsmall' name='name' placeholder='Name' onChange={(e) => handleChange(e)} />
                    <br/>
                    <TextInput size='xsmall' name='age' placeholder='Age' onChange={(e) => handleChange(e)}  />
                    <br/>
                    <TextInput size='xsmall' name='email' placeholder='Email' onChange={(e) => handleChange(e)} />
                    <br/>
                    <Button type='submit' primary label='Add Friend'/>
                </Form>
                {friends.map((friend) => {
                    return (
                    <Box margin='medium'>
                        <Text>{friend.name}</Text>
                        <Text>Age: {friend.age}</Text>
                        <Text>Email: {friend.email}</Text>
                    </Box>)
                })}
            </Box>
        </Box>
    )
}

export default FriendsList;