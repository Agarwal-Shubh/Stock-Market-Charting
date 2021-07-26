import {
    makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useNavigate } from 'react-router';
import Img from '../assets/404Img.svg';
import CustomButton from '../components/Elements/Button';

const Font = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        boxShadow: '0 2.6px 2.6px 0 rgba(0, 0, 0, 0.1)',
        backgroundColor: '#3b4c58',
        width:'50%',
        margin:' 10px auto'
      },
      buttonFont: {
        width: '100%',
        height: '23px',
        fontFamily: Font,
        fontSize: '15px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        '&:hover':{
            color:'#3b4c58'
        }
      },
      Image: {
        height:'40%',width:'40%',
        margin:'auto'
    },
    resultFont:{
        width: '100%',
        fontWeight:'bold',
        fontFamily: Font,
        fontSize: '20px',
        textAlign: 'center',
        margin:'20px auto',
        color: '#3b4c58',
    },
    container: {
        width:'60%',
        margin: '30px auto',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        position: 'relative'
    },

}));


function PageNotFound(){
    const classes = useStyles();
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate(`/`,{replace:true});
      };
    
    return (
        <div className={classes.container}>
                    <div className={classes.paper}>
                    <img src={Img} alt="404 Not Found" className={classes.Image} />
                        <Typography className={classes.resultFont}>Oops! The page you are looking for doesn't exist!</Typography>                          
                     <CustomButton className={classes.buttonStyle} onClick={handleContinue}><Typography className={classes.buttonFont}>Continue</Typography></CustomButton>   
                    </div>    
        </div>
    );
}

export default PageNotFound;