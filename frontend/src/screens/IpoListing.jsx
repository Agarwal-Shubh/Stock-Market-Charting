import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import IpoCard from '../components/Cards/IpoCard';
import Loader from '../components/Elements/Loader';
import IpoMenu from '../components/MenuTabs/IpoMenu';
import { listIPOs } from '../redux/actions/ipoActions';
import ErrorScreen from './ErrorScreen';

const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function IPOListing() {
    const classes = useStyles();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const ipoList = useSelector((state)=>state.ipoList);
    const {ipos,loading,error} = ipoList;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(userInfo){
     
        }    
        else{
            navigate('/');
        }
        },[dispatch]);
    

    return (
        <div style={{'backgroundColor':'#fcfcfc'}}>
            <Grid container>
                <Grid item xs={12} sm={5}>
                    <IpoMenu viewIpoActive={true}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.container}>
                   {loading ? (
                        <>
                       <Loader openLoader={true} />
                        </>
                    ) : error ? (
                        <>
                        <ErrorScreen />
                        </>
                    ) : (
                                <>
                                {ipos.length>0?ipos.map((item) => (
                                <IpoCard key={item._id} id={item._id} companyName={item.companyName} remarks={item.remarks} stockExchangeName={item.stockExchangeName} pricePerShare={item.pricePerShare} shares={item.shares} openDateTime={item.openDateTime}/>
                                )):<div>No IPO's Listed yet.</div>}
                                </>
                            )}
                    </div>
                   
                </Grid>
            </Grid>
           
        </div>
    );
}

export default IPOListing;