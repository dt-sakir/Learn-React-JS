import React, {Component} from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AwesomeSlider from '../components/home/Slider'
import Services from '../components/home/Services'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default class Home extends Component {
    render() {
        return (
            <>
                <AwesomeSlider/>
                <Box className="m-5">
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Services title={"Jhumu 1"}/>
                        </Grid>
                        <Grid item xs>
                            <Services title={"Jhumu 2"}/>
                        </Grid>
                        <Grid item xs>
                            <Services title={"Jhumu 3"}/>
                        </Grid>
                    </Grid>
                </Box>


                <Stack sx={{width: '100%'}} spacing={2}>
                    <Alert variant="filled" severity="success">
                        This is a success alert — check it out!
                    </Alert>
                </Stack>
            </>
        )
    }
}
