import { Grid } from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import CompanyTable from '../../components/Admin/Company/CompanyTable';
import Form from '../../components/Admin/Company/Form';
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



function ViewCompany() {
    const classes = useStyles();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const companyList = useSelector((state)=>state.companyList);
    const {companies,loading,error} = companyList;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;

    const selectedCompany = companies?companies.find((company)=>company.id===id):'';
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
                    <AdminMenu companyMenuActive={true} expanded="panel1" addCompanyActive={true}/>
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
                                <Form flag="1" company={selectedCompany} />
                                </>
                            )}
                    </div>
                   
                </Grid>
            </Grid>
           
        </div>
    );
}

export default ViewCompany;