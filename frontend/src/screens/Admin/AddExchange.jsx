import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Form from '../../components/Admin/Exchange/Form';
import AdminMenu from '../../components/MenuTabs/AdminMenu';



const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function AddExchange() {
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
                    <AdminMenu exchangeMenuActive={true} expanded="panel2" addExchangeActive={true}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Form flag="0" /> 
                </Grid>
            </Grid>
           
        </div>
    );
}

export default AddExchange;