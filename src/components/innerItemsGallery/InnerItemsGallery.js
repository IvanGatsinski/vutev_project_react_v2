import React, { Component } from 'react';
import ImgsViewer from 'react-images-viewer';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
    cardWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    card: {
        width: "20%",
        margin: "0 0.5%"
    },
    media: {
        height: 140,
    },
};
class InnerItemsGallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            currImg: 0,
        }
    }
    openImgsViewer = (index, event) => {
        event.preventDefault()
        this.setState({
            currImg: index,
            isOpen: true,
        })
    }
    closeImgsViewer = () => {
        this.setState({
            currImg: 0,
            isOpen: false,
        })
    }
    gotoPrev = () => {
        this.setState({
            currImg: this.state.currImg - 1
        })
    }
    gotoNext = () => {
        this.setState({
            currImg: this.state.currImg + 1
        })
    }
    gotoImg = (index) => {
        this.setState({
            currImg: index
        })
    }

    render() {
        const { classes } = this.props;
        let mainPic = { src: this.props.mainPic };
        let imgs = this.props.additionalPics.map((image) => {
            return { src: image }
        })
        imgs.unshift(mainPic);
        
        return (
            <div className={classes.cardWrapper}>
                {imgs.map((img, index) => {
                    return (
                        <Card className={classes.card} key={index} onClick={(e) => this.openImgsViewer(index, e)}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img.src}
                                    title={img.name}
                                />
                            </CardActionArea>
                        </Card>)
                })}
                <ImgsViewer
                    backdropCloseable
                    currImg={this.state.currImg}
                    imgs={imgs}
                    isOpen={this.state.isOpen}
                    onClickImg={this.gotoNext}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrev}
                    onClose={this.closeImgsViewer}
                />
            </div>
        )
    }
}
export default withStyles(styles)(InnerItemsGallery);