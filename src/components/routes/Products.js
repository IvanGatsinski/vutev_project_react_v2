import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductsTabs from "../layouts/ProductsTabs";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = {
    gridRoot: {
        flexGrow: 1,
        textAlign: "center",
        width: "100%",
        margin: "auto"
    },
    sortWrapper: {
        margin: "auto",
        marginTop: "1.5rem",
        paddingBottom: "0.3rem",
        width: "30%",
        textAlign: "center"
    },
    sortButtons: {
        fontSize: "0.7rem",
        color: "black",
        borderColor: "black",
        padding: "0 5px",
        margin: "0 5px"
    },
    card: {
        maxWidth: 200,
        border: "0.5px solid black"
    },
    media: {
        height: 100,
    },
    removeDecoration: {
        textDecoration: 'none'
    }
}

class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: this.props.allProducts,
            type: "Всички Продукти",
            spacing: '16'
        }
    }
    showAllProducts = () => {
        this.setState({ products: this.props.allProducts, type: "Всички Продукти" })
    }
    showKitchenProducts = () => {
        let kitchenProducts = this.props.allProducts.filter((product) => {
            return product.type === "Кухня";
        })
        this.setState({ products: kitchenProducts, type: "Продукти за вашата кухня." })
    }
    showLivingroomProducts = () => {
        let livingroomProducts = this.props.allProducts.filter((product) => {
            return product.type === "Хол";
        })
        this.setState({ products: livingroomProducts, type: "Продукти за вашата всекидневна." })
    }
    showBathroomProducts = () => {
        let bathroomProducts = this.props.allProducts.filter((product) => {
            return product.type === "Баня";
        })
        this.setState({ products: bathroomProducts, type: "Продукти за вашата баня." })
    }
    sortDescending = () => {
        let sortedDescProducts = this.state.products.sort((a, b) => {
            if (Number(a.price) < Number(b.price)) {
                return 1;
            }
            else if (Number(a.price) > Number(b.price)) {
                return -1;
            }
            return 0;
        })
        this.setState({ products: sortedDescProducts })
    }
    sortAscending = () => {
        let sortedAscProducts = this.state.products.sort((a, b) => {
            if (Number(a.price) > Number(b.price)) {
                return 1;
            }
            else if (Number(a.price) < Number(b.price)) {
                return -1;
            }
            return 0;
        })
        this.setState({ products: sortedAscProducts })
    }
    render() {
        const { classes } = this.props;
        return (<React.Fragment>
            <ProductsTabs
                showAll={this.showAllProducts}
                showKitchen={this.showKitchenProducts}
                showLivingroom={this.showLivingroomProducts}
                showBathroom={this.showBathroomProducts} />
            <div className={classes.sortWrapper}>Сортирай по цена:
                <Button variant="outlined" className={classes.sortButtons} onClick={this.sortAscending}>малка-голяма</Button>
                <Button variant="outlined" className={classes.sortButtons} onClick={this.sortDescending}>голяма-малка</Button>
            </div>
            <Grid container className={classes.gridRoot} spacing={16}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={Number(this.state.spacing)}>
                        {this.state.products.map(product => (
                            <Grid key={product.id} item>
                                <Card className={classes.card}>
                                    <Link to={"products/" + product.id} className={classes.removeDecoration}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography gutterBottom>
                                                    {product.name}
                                                </Typography>
                                            </CardContent>
                                            <CardMedia
                                                className={classes.media}
                                                image={product.imageUrl}
                                                title={product.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" component="h2">
                                                    Цена:{product.price}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>)
    }
}

export default withStyles(styles)(Products);