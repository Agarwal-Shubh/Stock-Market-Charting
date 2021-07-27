import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import IpoTable from '../../components/Admin/IPO/IpoTable';
import Loader from '../../components/Elements/Loader';
import AdminMenu from '../../components/MenuTabs/AdminMenu';
import ErrorScreen from '../ErrorScreen';



const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function IpoList() {
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
                    <AdminMenu ipoMenuActive={true} expanded="panel3" viewIpoActive={true}/>
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
                                <IpoTable ipos={ipos} />
                                </>
                            )}
                    </div>
                   
                </Grid>
            </Grid>
           
        </div>
    );
}

export default IpoList;