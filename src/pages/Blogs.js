import React, {Component} from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


import BlogList from "../components/blogs/BlogList";

export default class Blogs extends Component {
    render() {
        return (
            <>
                <BlogList/>
                <Stack sx={{width: '100%'}} spacing={2}>
                    <Alert variant="filled" severity="info">
                        Blogs
                    </Alert>
                </Stack>
            </>
        )
    }
}
