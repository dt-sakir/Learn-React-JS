import React, {Component} from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import BlogList from "../components/blogs/BlogList";
import Breadcrumb from "../components/Breadcrumb";

export default class Blogs extends Component {
    render() {
        return (
            <>
                <Breadcrumb title={'Blog page'}/>
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
