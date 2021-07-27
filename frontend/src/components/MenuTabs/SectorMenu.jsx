import {
    makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useNavigate } from 'react-router';



const titleFont = "'Josefin Sans', sans-serif";
const Font = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        position: 'relative',
    },
    Title: {
        fontFamily: titleFont,
        margin:'15px 0 0 10px',
        fontSize: '25px',
        textAlign: 'left',
        color: '#3b4c58',
    },
    TabContainer: {
        width:'80%',
        margin: '60px auto',
        [theme.breakpoints.up('md')]: {
            width:'50%',
          },
    },
    Container:{
        width:'100%',
        margin:'20px auto',
    },
    lineStyle: {
        width: '70%',
        height: '0.5px',
         margin: '15px auto',
        backgroundColor: 'rgba(105,83,83,0.7)',
        opacity:0.5
    },
    TabTitle: {
        width: '100%',
        fontWeight:'bold',
        fontFamily: Font,
        fontSize: '20px',
        textAlign: 'Center',
        color: '#3b4c58',
        [theme.breakpoints.up('sm')]: {
            fontSize:'25px',
          },
        margin:'10px auto'
    },
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
        color: '#3b4c58',
        margin:'10px auto',
        cursor: 'pointer',
        opacity:0.5
      },

}));

function SectorMenu(props) {
    const classes = useStyles();
    const navigate = useNavigate(); 
    
    const handleViewSector=()=>{
        navigate('/sectors');
    }
    const handleCompareSector=()=>{
        navigate('/compareSectors');
    }
    return (
        <div className={classes.TabContainer}>
            <Typography className={classes.TabTitle}>Services</Typography>
            <div className={classes.paper}>
                <div className={classes.Container}>
            <Typography variant="button" onClick={handleViewSector} className={classes.buttonFont} style={ props.viewSectorActive ? {'color':'#3b4c58',opacity:1 } : {}}>List of Sectors</Typography>
            <hr className={classes.lineStyle} />
            <Typography variant="button" onClick={handleCompareSector} className={classes.buttonFont} style={ props.compareSectorActive ? {'color':'#3b4c58',opacity:1  } : {}}>Compare Sectors</Typography>
            <hr className={classes.lineStyle} />
            </div>
            </div>           
        </div>
    );
}

export default SectorMenu;