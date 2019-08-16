import React from "react";
import InnerItemsGallery from "../innerItemsGallery/InnerItemsGallery";
import { Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
    productTitle: {
        width: "30%",
        margin: "auto",
        marginBottom: "1rem",
        textAlign: "center",
        borderBottom: "1px solid rgb(0, 106, 148)"
    },
    paperDescription: {
        width: "84%",
        margin: "1rem auto",
    },
    innerDescription: {
        margin: "0.4rem 0.5rem",
        fontSize: "1rem",
        fontWeight: "bold",
        letterSpacing: "1px"
    },
    productInfo: {
        fontSize: "1.1rem",
        lineHeight: "1.5",
        letterSpacing: "0.5px"
    }
}
const Product = (props) => {
    const { classes } = props;

    let currentItem = props.galleryItems.filter((item) => {
        return item.id === Number(props.match.params.productID);
    })
    currentItem = currentItem[0];
    if (currentItem) {
        return (<React.Fragment>
            <Typography gutterBottom variant="h5" className={classes.productTitle}>{currentItem.name}</Typography>
            <InnerItemsGallery mainPic={currentItem.imageUrl} additionalPics={currentItem.additionalPictures} />
            <Paper className={classes.paperDescription}>
                <Typography gutterBottom><span className={classes.innerDescription}>Тип:</span><span className={classes.productInfo}>{currentItem.type}</span></Typography>
                <Typography gutterBottom><span className={classes.innerDescription}>Oписание:</span><span className={classes.productInfo}>{currentItem.fullDescription}</span></Typography>
                <Typography gutterBottom><span className={classes.innerDescription}>Цена:</span><span className={classes.productInfo}>{currentItem.price}лв.</span></Typography>
            </Paper>
        </React.Fragment>)
    }
    return <Redirect to="/error" />
}
export default withStyles(styles)(Product);