import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import CompanyCard from '../components/Cards/CompanyCard';
import Loader from '../components/Elements/Loader';
import CompanyMenu from '../components/MenuTabs/CompanyMenu';
import { listCompanies } from '../redux/actions/companyActions';
import ErrorScreen from './ErrorScreen';

const useStyles = makeStyles((theme) => ({
    container:{
        width:'90%',
        margin:'60px auto',
    },
}));



function CompanyListing() {
    const classes = useStyles();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const companyList = useSelector((state)=>state.companyList);
    const {companies,loading,error} = companyList;
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
                    <CompanyMenu viewCompanyActive={true}/>
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
                                {companies.length>0?companies.map((item) => (
                                <CompanyCard key={item._id} id={item._id} name={item.name} turnover={item.turnover} bod={item.bod} sector={item.sectorName} ceo={item.ceo} code={item.code} desc={item.description} />
                                )):<div>No Company Listed yet.</div>}
                                </>
                            )}
                    </div>
                   
                </Grid>
            </Grid>
           
        </div>
    );
}

export default CompanyListing;