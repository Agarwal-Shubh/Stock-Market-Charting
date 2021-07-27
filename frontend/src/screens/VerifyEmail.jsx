import { Typography } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import CustomButton from '../components/Elements/Button';
import NotificationModal from '../components/Elements/NotificationModal';
import { verifyEmail } from '../redux/actions/userActions';
import { USER_VERIFY_RESET } from '../redux/constants/userConstants';
const Font = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'20px auto'
    },
    elephant: {
        height: '40%',
        width: '40%',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: '450px',
        width:'80%',
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
    buttonSubmit:{
        width: "80%",
        marginTop:"10px",
        fontFamily:Font,
    },
    buttonFont: {
        color:'#fff',
        fontFamily:Font,
        cursor: 'pointer',
        '&:hover': {
          color:'#3b4c58',
        },
      },
}));



function VerifyEmail() {
    const classes = useStyles();
    const userVerify = useSelector((state) => state.userVerify);
    const {userInfo,error,loading} = userVerify;
    const query = new URLSearchParams(document.location.search);
    const token = query.get("token") ? query.get("token") : "";
    const [openModal,setOpenModal] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleCloseModal=()=>{
        setOpenModal(false);
        dispatch({type:USER_VERIFY_RESET});
        navigate('/login');
    }

    const handleActivateClick = () => {
       dispatch(verifyEmail(token));
      };

    useEffect(() => {
        if (userInfo) {
        setOpenModal(true);
        }
      }, [dispatch,userInfo]);

    return (
        <div className={classes.container}>
                    <div className={classes.paper}>
                       <Typography className={classes.resultFont}>Activate your Account</Typography>
                       <Typography className={classes.messageFont}>Please click on the Activate button to verify your Email.</Typography>
                        <CustomButton onClick={handleActivateClick} className={classes.buttonSubmit}><Typography className={classes.buttonFont}>Activate</Typography></CustomButton>
                        <NotificationModal open={openModal} message="Account Succesfully Activated!. Please Login again to get Started." handleSubmit={handleCloseModal} />


                    
                    </div>    
        </div>
    );
}

export default VerifyEmail;
