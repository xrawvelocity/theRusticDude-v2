import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 250,
    },
});

export default function ProjectCard({ image, name, description, onClick }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {name}
                    </Typography>
                    <Typography
                        variant="h5"
                        color="textSecondary"
                        component="h5"
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
