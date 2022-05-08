import React, {Component} from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default class NoPage extends Component {
    render() {
        return (
            <Stack sx={{width: '100%'}} spacing={2}>
                <Alert variant="filled" severity="danger">
                    Not Found
                </Alert>
            </Stack>
        )
    }
}
