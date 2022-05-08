import React, {Component} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/everything?q=apple&from=2022-05-07&to=2022-05-07&sortBy=popularity&apiKey=19e637045b9a49c388d2f10e7083e571")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.articles
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const blogCards = this.state.items.map((data) =>
            <Grid item xs={6} md={3}>
                <a href={data.url} target={'_blank'}>
                <Card className={'mb-3'}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={data.urlToImage}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {data.author}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.description}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                {data.publishedAt}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </a>
            </Grid>
        );
        return (
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    {blogCards}
                </Grid>
            </Box>
        );
    }
}

export default BlogList;