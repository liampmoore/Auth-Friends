import React from 'react';
import {Box} from 'grommet';


const AppBar = (props) => {
    return (
        <Box
        elevation='medium'
        pad={{ left: 'medium', right: 'small', vertical: 'medium' }}
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'>
            <Box
            height='100%'
            direction='row'
            align='center'>
                {props.icon}
            </Box>
            <Box
            height='100%'
            direction='row'
            align='center'
            justify='between'>
                {props.children}
            </Box>
        </Box>
    )
}

export default AppBar;