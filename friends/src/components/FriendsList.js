import React, {useEffect, useState} from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';

import {Box, Paragraph} from 'grommet';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => setFriends(res.data))

    }, [])

    return (
        <Box flex direction='column' align='center'>
            <Box width='small'>
                {friends.map((friend) => {
                    return (<Paragraph>{friend.name}</Paragraph>)
                })}
            </Box>
        </Box>
    )
}

export default FriendsList;