import { Collapse, IconButton } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Moment from 'moment';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Font = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
    card: {
        width: '100%',
        height: '120px',
        backgroundColor: 'transparent',
        borderWidth: 0,
        border: 0,
        borderStyle: 'none',
        outline: 'none',
        elevation: 0,
    },
    ItemContainer: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        position: 'relative',
        width:'100%',
        [theme.breakpoints.up('sm')]:{
            padding:theme.spacing(2, 4, 3),
        },
        margin:'20px auto'
    },
    cardBody:{
        position:'relative',
    },
    contentTitle: {
        width: '100%',
        heigth: '19px',
        margin: 'auto',
        fontFamily: Font,
        fontSize: '14px',
        fontWeight: '600',
        textAlign: 'center',
        color: '#3b4c58',
        margin:'10px 0 0 0'
    },
    contentID: {
        width: '100%',
        heigth: '19px',
        margin: 'auto',
        fontFamily: Font,
        fontSize: '14px',
        fontWeight: '600',
        textAlign: 'right',
        color: '#3b4c58',
        margin:'10px 0 0 0'
    },
    content: {
        width: '100%',
        heigth: '19px',
        margin: 'auto',
        fontFamily: Font,
        fontSize: '14px',
        fontWeight: 'normal',
        textAlign: 'center',
        color: '#3b4c58',
        margin:'10px 0 0 0'
    },
    contentHeader: {
        display:'block',
        fontWeight:'bold',
        marginTop:'10px',
        [theme.breakpoints.up('sm')]: {
            display:'none',
          },
    },
    lineStyle: {
        width: '100%',
        margin: '20px 0',
        backgroundColor: 'rgba(105,83,83,0.7)'
    },
    dropItem:{
        position:'absolute',
        top:0,
        right:0,
        padding:0
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
}));

function IpoCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleExpandClick=()=>{
        setExpanded(!expanded);
    }

    return (
        <div className={classes.ItemContainer}>
            <CardContent>
                <Grid container className={classes.cardBody}>
                <Grid container>
                    <Grid item xs={12} sm={3}>
                    <Typography className={classes.contentTitle}>Company</Typography>
                        <Typography className={classes.content}>{props.companyName}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Typography className={classes.contentTitle}>Stock Exchange</Typography>
                        <Typography className={classes.content}>{props.stockExchangeName}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Typography className={classes.contentTitle}>Opening Date and Time</Typography>
                        <Typography className={classes.content}>{Moment(props.openDateTime).format('MMMM Do YYYY, h:mm a')}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                    <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
                    </Grid>
                </Grid>
                </Grid>
            </CardContent>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Grid container style={{margin:'10px auto'}}>
                    <Grid item xs={12} sm={4}>
                    <Typography className={classes.contentTitle}>Price Per Share</Typography>
                    <Typography className={classes.content}>{props.pricePerShare}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Typography className={classes.contentTitle}>Total Shares</Typography>
                    <Typography className={classes.content}>{props.shares}</Typography>
                     </Grid>
                     <Grid item xs={12} sm={4}>
                     <Typography className={classes.contentTitle}>Remarks</Typography>
                        <Typography className={classes.content}>{props.remarks}</Typography>
                    </Grid>
                    </Grid>
                </CardContent>
                                
                </Collapse>
                
            
        </div>

    );
}
export default IpoCard;