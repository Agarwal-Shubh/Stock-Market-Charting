import { Typography } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React from 'react';
import { useNavigate } from 'react-router';
const Font = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'20px auto'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: '450px',
        width:'80%',
        //border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),        
        position:'relative'
    },
    resultFont:{
        width: '100%',
        fontWeight:'normal',
        fontFamily: Font,
        fontSize: '24px',
        textAlign: 'center',
        margin:'10px auto',
        color: '#3b4c58',
    },
    messageFont:{
        width: '100%',
        fontWeight:'normal',
        fontFamily: Font,
        fontSize: '15px',
        textAlign: 'center',
        margin:'10px auto',
        color: '#3b4c58',
        textTransform:'none',
    },
}));



function ErrorScreen() {
    const classes = useStyles();
    const navigate = useNavigate();


    const handleContinue = () => {
        navigate(`/`,{replace:true});
      };

    return (
        <div className={classes.container}>
                    <div className={classes.paper}>
                            <Typography className={classes.resultFont}>Whoops! Something is not right.</Typography>
                            <Typography className={classes.messageFont}>Please try again.</Typography>
                            <Typography className={classes.messageFont} variant='button' onClick={handleContinue}>Continue</Typography>

                    
                    </div>    
        </div>
    );
}

export default ErrorScreen;
