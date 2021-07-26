import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCompanies } from '../redux/actions/companyActions';
import { listExchanges } from '../redux/actions/exchangeActions';
import { listIPOs } from '../redux/actions/ipoActions';
import { listSectors } from '../redux/actions/sectorActions';


function Home(){
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(userInfo){
           dispatch(listCompanies());
           dispatch(listExchanges());
           dispatch(listIPOs());
           dispatch(listSectors());

        }    
        },[dispatch]);
    return(
    <div>
    
    </div>
    );
}

export default Home;