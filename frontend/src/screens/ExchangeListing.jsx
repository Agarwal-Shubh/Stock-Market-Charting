import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ExchangeCard from '../components/Cards/ExchangeCard';
import Loader from '../components/Elements/Loader';
import ExchangeMenu from '../components/MenuTabs/ExchangeMenu';
import { listExchanges } from '../redux/actions/exchangeActions';
import { listSectors } from '../redux/actions/sectorActions';
import ErrorScreen from './ErrorScreen';

const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function ExchangeListing() {
    const classes = useStyles();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const exchangeList = useSelector((state)=>state.exchangeList);
    const {exchanges,loading,error} = exchangeList;
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
                    <ExchangeMenu viewExchangeActive={true}/>
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
                                {exchanges.length>0?exchanges.map((item) => (
                                <ExchangeCard key={item._id} id={item._id} name={item.name} brief={item.brief} remarks={item.remarks} companies={item.companies} />
                                )):<div>No Stock Exchanges Listed yet.</div>}
                                </>
                            )}
                    </div>
                   
                </Grid>
            </Grid>
           
        </div>
    );
}

export default ExchangeListing;