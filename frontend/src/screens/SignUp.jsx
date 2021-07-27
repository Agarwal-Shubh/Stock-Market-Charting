import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import CustomButton from '../components/Elements/Button';
import NotificationModal from '../components/Elements/NotificationModal';
import CustomTextField from '../components/Elements/TextField';
import { register } from '../redux/actions/userActions';
import { USER_REGISTER_RESET } from '../redux/constants/userConstants';


const Font = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
    login: {
        display: 'flex',
        flexDirection: 'column',
        marginTop:'20px',
        alignItems:'center'
    },
    HeaderFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        color: '#3b4c58',
        fontWeight: 'bold',
        fontSize: '24px',
        margin:'15px auto',
        fontFamily:Font,
        textTransform:'uppercase'
    },
    register: {
        fontSize: '14px',
        color: '#69535380',
        marginTop: "15px",
        cursor: 'pointer',
        "&:hover": {
            color: '#3b4c58',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'40px auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 2, 4),
        position: 'relative',
        width:'60%',
        minWidth:'300px',
        margin:'20px auto 40px auto',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }
    },
    textField: {
        width: "80%",
        marginTop:'10px',
        background:'#f6fdff',
        color:'#3b4c58',
        borderRadius:'0',
        fontFamily:Font,
    },
    buttonSubmit:{
        width: "80%",
        marginTop:"10px",
        fontFamily:Font,
    },
    logo: {
           width:'160px',
        margin:'10px 30px',
        background:'#fcfcfc',
        [theme.breakpoints.up('sm')]: {
           width:'100px'
          },
    },
    errorText:{
        fontFamily:Font,
        fontSize:'13px',
        color:'#d10000',
        marginTop:'10px'
    },
    userExist:{
        color:'#3b4c58',
        fontSize:'14px',
        fontFamily:Font,
        margin:'10px auto',
    },
    signupButton:{
        color:'#1c7ec6',
        fontSize:'14px',
        fontFamily:Font,
        margin:'10px auto',
        textTransform:'none',
        marginLeft:'0px',
        cursor: 'pointer',
    }
}));



function SignUp() {
    const classes = useStyles();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [passwordCnf,setPasswordCnf] = useState();
    const [email, setEmail] = useState();
    const [mobile,setMobile] = useState();
    const [err,setErr] = useState();
    const [openModal,setOpenModal] = useState();
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const placeEmail = (event) => {
        const {name,value} = event.target;
        setEmail((prevState)=>value);
    };
    const placeUsername = (event) => {
        const {name,value} = event.target;
        setUsername((prevState)=>value);
    };
    const placePassword = (event) => {
        const {name,value}=event.target;
        setPassword((prevState)=>value);
    };
    const placePasswordConfirm = (event) => {
        const {name,value}=event.target;
        setPasswordCnf((prevState)=>value);
    };
    const placeMobile=(event)=>{
        const{name,value} = event.target;
        setMobile((prevState)=>value);
    }
    const handleSignUp = () => {
        if(password===passwordCnf){
            dispatch(register(username, email, password,mobile));
            setErr(false);
        }
        else{
            setErr(true);
        }
       
    }
    const handleLoginClick = () => {
      navigate('/login');
    }
    const handleCloseModal=()=>{
        setOpenModal(false);
        dispatch({type:USER_REGISTER_RESET});
        navigate('/');
    }

    useEffect(()=>{
        if(userInfo){
        setOpenModal(true);
        }
    },[userInfo]);

    return(
        <div style={{'backgroundColor':'#f7f7f7'}}>
        <Grid container>
    <Grid item xs={12} sm={4}>
      
    </Grid>
    <Grid item xs={12} sm={4}>
        <Grid container justify='center'>
    <div className={classes.paper}>
                        <div>
                            <Typography className={classes.headerTitle}>Sign Up</Typography>
                        </div>
                    
                        <div className={classes.form}>
                        <CustomTextField
                                className={`${classes.textField} without-padding`}
                                variant="outlined"
                                placeholder="UserName"
                                onChange={placeUsername}
                            />
                            <CustomTextField
                                className={`${classes.textField} without-padding`}
                                variant="outlined"
                                placeholder="Email"
                                onChange={placeEmail}
                            />
                            <CustomTextField
                                className={`${classes.textField} without-padding`}
                                variant="outlined"
                                placeholder="Password"
                                required
                                type="password"
                                onChange={placePassword}
                            />
                             <CustomTextField
                                className={`${classes.textField} without-padding`}
                                variant="outlined"
                                placeholder="Confirm Password"
                                required
                                type="password"
                                onChange={placePasswordConfirm}
                            />
                             <CustomTextField
                                className={`${classes.textField} without-padding`}
                                variant="outlined"
                                placeholder="Mobile"
                                onChange={placeMobile}
                            />
                            {loading && <Typography className={classes.errorText}>Please Wait!</Typography>}
                            {error && <Typography className={classes.errorText}>Registration Failed!</Typography>}
                            {err && <Typography className={classes.errorText}>Confirmation Password does not match the Password!</Typography>}
                            <div className="Button">
                            <CustomButton
                                    className={classes.buttonSubmit}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSignUp}
                                >
                                   Register
                            </CustomButton>
                            </div>
                             </div>
                             <Grid container>
                                 <Grid item xs={1}>

                                 </Grid>
                                 <Grid item xs={5}>
                                 <Typography className={classes.userExist}>Already a User?</Typography>
                                 </Grid>
                                 <Grid item xs={6} className={classes.signupButton}>
                                 <Typography variant='button' className={classes.signupButton} onClick={handleLoginClick} style={{margin:'10px auto',textAlign:'left'}}>Login</Typography>
                                 </Grid>
                             </Grid>
                              
                </div>
        </Grid>
    </Grid>
    <Grid item xs={4}>
       
    </Grid>
        </Grid>
        <NotificationModal open={openModal} message="Verification Email Sent Successfully. Please Check you email to get your account activated!" handleSubmit={handleCloseModal} />
    </div>
    )
}

export default SignUp;