import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Form from '../../components/Admin/Sector/Form';
import UploadStockPrices from '../../components/Admin/Stock Price/UploadStockPrices';
import AdminMenu from '../../components/MenuTabs/AdminMenu';



const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function AddStockPrice() {
    const classes = useStyles();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

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
                    <AdminMenu stockPriceMenuActive={true} expanded="panel4" addStockPriceActive={true}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <UploadStockPrices />
                </Grid>
            </Grid>
           
        </div>
    );
}

export default AddStockPrice;