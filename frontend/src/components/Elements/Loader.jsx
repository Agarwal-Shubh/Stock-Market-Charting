import { Backdrop, Fade, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import {
    makeStyles
} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    HeaderFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        
        width:'100%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'40px auto',
        borderStyle:'none'
    },
    paper: {
        width:'90%',
        maxWidth:'400px',
        display:'flex',
        flexDirection:'column',
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center',
        alignItems:'center',
        //border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        position: 'relative'
    },
    backDrop:{
        backdropFilter: "blur(3px)",
        backgroundColor:'#fff'
    }
}));



function Loader(props) {
    const classes = useStyles();
    let open = props.openLoader;

    return (
        <div>
            <Modal
                className={classes.modal}
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    classes: {
                        root: classes.backDrop,
                      },
                }}
            >
                <Fade in={open}  style={{outline:0}}>
                <div className={classes.paper}>
                        <div className={classes.HeaderFlex}>
                        </div>
                        <Typography>Loading, Please Wait!</Typography>
                        </div>
                   
                </Fade>
            </Modal>
                   
        </div>
    );
}

export default Loader;