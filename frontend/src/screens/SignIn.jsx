import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import CustomButton from '../components/Elements/Button';
import CustomTextField from '../components/Elements/TextField';
import { signin } from '../redux/actions/userActions';



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
        margin:'20px auto',
        textTransform:'uppercase',
        fontFamily:Font,
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

    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2,2,4),
        position: 'relative',
        width:'70%',
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
        borderRadius:'0'
    },
    buttonSubmit:{
        width: "80%",
        marginTop:"10px",
        fontFamily:Font,
    },
    logo: {
           width:'100px',
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
    newUser:{
        color:'#1c7ec6',
        fontSize:'14px',
        fontFamily:Font,
        margin:'10px auto',
        textTransform:'none',
        marginLeft:'0px',
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



function SignIn(props) {
    const classes = useStyles();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const query = new URLSearchParams(document.location.search);
    const redirect = query.get("redirect") ? query.get("redirect") : "/";
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const placeUsername = (event) => {
        const {name,value} = event.target;
        setUsername((prevState)=>value);
    };
    const placePassword = (event) => {
        const {name,value}=event.target;
        setPassword((prevState)=>value);
    };

    const handleSignUp = () => {
    navigate('/signup');
    }

    const handleSignIn = () => {
        dispatch(signin(username, password));

    }

    useEffect(() => {
        if (userInfo) {
        navigate(`/`,{replace:true});
        }
      }, [dispatch,userInfo]);

    return(
        <div style={{'backgroundColor':'#f7f7f7'}}>
        <Grid container>
    <Grid item xs={12} sm={4}>
      
    </Grid>
    <Grid item xs={12} sm={4}>
        <Grid container justify='center'>
  
    <div className={classes.paper}>
                        <div>
                            <Typography className={classes.headerTitle}>Sign In</Typography>
                        </div>
                    
                    <div className={classes.form}>
                            <CustomTextField
                                className={`${classes.textField} without-padding`}
                                variant="outlined"
                                placeholder="Email"
                                onChange={placeUsername}
                                required
                            />
                            <CustomTextField
                                className={`${classes.textField} without-padding`}
                                variant="outlined"
                                placeholder="Password"
                                required
                                type="password"
                                onChange={placePassword}
                            /> 
                            {loading && <Typography className={classes.errorText}>Please Wait!</Typography>}
                            {error && <Typography className={classes.errorText}>Login Failed!</Typography>}              
                            <div className="Button">
                            <CustomButton
                                    className={classes.buttonSubmit}
                                    variant="contained"
                                    color="primary"
                                   onClick={handleSignIn}
                                >
                                    Log In
                            </CustomButton>
                            </div>
                             </div>
                             <Grid container style={{marginTop:'10px',marginLeft:'20px'}}>
                                 <Grid item xs={5}>
                                    <Typography className={classes.newUser} style={{margin:'5px auto',textAlign:'center'}}>New User?</Typography>
                                 </Grid>
                                 <Grid item xs={5}>
                                 <Typography variant='button' className={classes.signupButton} onClick={handleSignUp} style={{margin:'0px auto',textAlign:'center'}}>Create Account</Typography>
                                 </Grid>
                             </Grid>
                              
                </div>
        </Grid>
    </Grid>
    <Grid item xs={4}>
    </Grid>
        </Grid>
    </div>
    )
}

export default SignIn;