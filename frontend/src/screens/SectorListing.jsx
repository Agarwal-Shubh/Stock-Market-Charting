import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import SectorCard from '../components/Cards/SectorCard';
import Loader from '../components/Elements/Loader';
import SectorMenu from '../components/MenuTabs/SectorMenu';
import { listSectors } from '../redux/actions/sectorActions';
import ErrorScreen from './ErrorScreen';

const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function SectorListing() {
    const classes = useStyles();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const sectorList = useSelector((state)=>state.sectorList);
    const {sectors,loading,error} = sectorList;
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
                    <SectorMenu viewSectorActive={true}/>
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
                                {sectors.length>0?sectors.map((item) => (
                                <SectorCard key={item._id} id={item._id} name={item.name} brief={item.brief} companies={item.companies} />
                                )):<div>No Sectors Listed yet.</div>}
                                </>
                            )}
                    </div>
                   
                </Grid>
            </Grid>
           
        </div>
    );
}

export default SectorListing;