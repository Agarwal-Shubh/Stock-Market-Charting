import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import CompanyTable from '../../components/Admin/Company/CompanyTable';
import ExchangeTable from '../../components/Admin/Exchange/ExchangeTable';
import Loader from '../../components/Elements/Loader';
import AdminMenu from '../../components/MenuTabs/AdminMenu';
import { listCompanies } from '../../redux/actions/companyActions';
import ErrorScreen from '../ErrorScreen';



const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function ExchangeList() {
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
                    <AdminMenu exchangeMenuActive={true} expanded="panel2" viewExchangeActive={true}/>
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
                                <ExchangeTable exchanges={exchanges} />
                                </>
                            )}
                    </div>
                   
                </Grid>
            </Grid>
           
        </div>
    );
}

export default ExchangeList;