import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Form from '../../components/Admin/IPO/Form';
import AdminMenu from '../../components/MenuTabs/AdminMenu';



const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function ViewIpo() {
    const classes = useStyles();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const ipoList = useSelector((state)=>state.ipoList);
    const {ipos} = ipoList;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;

    const selectedIpo = ipos?ipos.find((ipo)=>ipo.id===id):'';
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
                    <AdminMenu ipoMenuActive={true} expanded="panel3" addIpoActive={true}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Form flag="1" ipo={selectedIpo} /> 
                </Grid>
            </Grid>
           
        </div>
    );
}

export default ViewIpo;