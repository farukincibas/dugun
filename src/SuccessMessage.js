
import React, { useState, useEffect } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useLocation } from "react-router-dom";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

}));

function SuccessAlert(props) {
    const location = useLocation();
    const successParams = location.state.successDetail;
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.root}>
                <Alert severity="success">Fiyat teklifin başarıyla iletildi!</Alert>
            </div>
            <Typography style={{ textAlign: "left" }} variant="body2" color="textSecondary" component="p">
                {successParams.name} sana en kısa sürede dönüş yapacak.
            </Typography>
        </>
    );

}

class SuccessMessage extends React.Component {
    render() {
        return (
            <>
                <SuccessAlert></SuccessAlert>
            </>
        );
    }
}

export default SuccessMessage