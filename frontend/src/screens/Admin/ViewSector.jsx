import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Form from '../../components/Admin/Sector/Form';
import AdminMenu from '../../components/MenuTabs/AdminMenu';



const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function ViewSector() {
    const classes = useStyles();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const sectorList = useSelector((state)=>state.sectorList);
    const {sectors} = sectorList;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;

    const selectedSector = sectors?sectors.find((sector)=>sector.id===id):'';
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
                    <AdminMenu sectorMenuActive={true} expanded="panel5" addSectorActive={true}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Form flag="1" sector={selectedSector} /> 
                </Grid>
            </Grid>
           
        </div>
    );
}

export default ViewSector;