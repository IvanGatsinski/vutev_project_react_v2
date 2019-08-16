import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
    root: {
        flexGrow: 1,
        margin: "auto",
    },
    tabStyles: {
        fontSize: '0.8rem',
        fontWeight: "bold",
        display: "flex"
    },
};

class ProductsTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                >
                    <Tab label="Всички" onClick={this.props.showAll} className={classes.tabStyles} />
                    <Tab label="Кухня" onClick={this.props.showKitchen} className={classes.tabStyles} />
                    <Tab label="Всекидневна" onClick={this.props.showLivingroom} className={classes.tabStyles} />
                    <Tab label="Баня" onClick={this.props.showBathroom} className={classes.tabStyles} />
                </Tabs>
            </Paper>
        );
    }
}

export default withStyles(styles)(ProductsTabs);