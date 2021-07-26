import Modal from '@material-ui/core/Modal';
import {
    makeStyles
} from '@material-ui/core/styles';
import React from 'react';
import CustomButton from './Button';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'20px auto'
    },
    paper: {
        width:'90%',
        maxWidth:'300px',
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
    buttonSubmit:{
        width: "220px",
        marginTop:"20px",
        marginBottom:'40px'
    },
    elephant: {
        height: '80px',
        width: '120px',
    },

}));



function NotificationModal(props) {
    const classes = useStyles();
    return (
                <Modal
                className={classes.modal}
                open={props.open}>
                        <div className={classes.paper}>
                            <p>{props.message}</p>
                               <CustomButton
                                    className={classes.buttonSubmit}
                                    variant="contained"
                                    color="primary"
                                    onClick={props.handleSubmit}
                                    >
                                    OK
                                    </CustomButton>                            
                        </div>
                </Modal>
    );
}

export default NotificationModal;