import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const properties = {
    duration: 3000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    arrows: true
}
const styles = {
    card: {
        width: "70vw",
        textAlign: "center",
        margin: "10px auto",
    },
    media: {
        height: "50vh",
    },
    link: {
        textDecoration: "none",
    },
    cardContentStyle: {
        padding: "0",
        margin: "0",
    }
};
const Slideshow = (props) => {
    const { classes } = props;
    const images = props.allItems.map((item) => {
        return (
            <Card key={item.id} className={classes.card}>
                <Link to={"/products/" + item.id} className={classes.link}>
                    <CardActionArea>
                        <CardContent className={classes.cardContentStyle}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.name}, цена: {item.price}лв.
                            </Typography>
                        </CardContent>
                        <CardMedia
                            className={classes.media}
                            image={item.imageUrl}
                            title={item.name}
                        />
                    </CardActionArea>
                </Link>
            </Card>
        );
        // return (<div key={item.id} className="each-slide">
        //     <div className="item-name">{item.name}, цена: {item.price}лв.</div>
        //     <Link to={"/products/" + item.id}>
        //         <div className="image-container">
        //             <img src={item.imageUrl} />
        //         </div>
        //     </Link>
        // </div>)
    });

    return (
        <Slide {...properties} className={classes.card}>
            {images}
        </Slide>
    )
}
Slideshow.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Slideshow);