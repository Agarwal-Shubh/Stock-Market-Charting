import React, { Component, useState } from 'react';
import { CSVReader } from 'react-papaparse';
import {
  Button,
  makeStyles, Snackbar, Typography
} from '@material-ui/core';
import Axios from 'axios';
import urls from '../../../urls';
import { useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import CustomButton from '../../Elements/Button';



const Font = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
  container: {
   height:"20%",
   width:'50%',
   margin:'25px auto'
  },
  title: {
    width: '100%',
    fontWeight:'bold',
    fontFamily: Font,
    fontSize: '25px',
    textAlign: 'center',
    // color: '#695353',
    margin:'20px auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        position: 'relative',
        marginTop:'60px'
    },
    buttonStyle: {
        boxShadow: '0 2.6px 2.6px 0 rgba(0, 0, 0, 0.1)',
        backgroundColor: '#3b4c58',
        width:'50%',
        margin:' 10px auto'
      },
      buttonFont: {
        width: '100%',
        height: '23px',
        fontFamily: Font,
        fontSize: '15px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        margin:'10px auto',
        cursor: 'pointer',
        opacity:1,
        '&:hover': {
        color:'#3b4c58',
        
        },
      },
}));

function UploadStockPrices(){
  const classes = useStyles();
  const [stockPricesData,setStockPricesData] = useState([]);
  const url= urls.endpoint+'/stockprice-service/stockPrice';
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [open,setOpen] = useState(false);

  const handleOnDrop = (Filedata) => {
    if(Filedata.length>0){
      Filedata.slice(0,Filedata.length-1).map((stockPrice)=>{
              setStockPricesData(((prevData)=>[
                ...prevData,
                {
                  ...stockPrice.data,
                }
              ])
      )
              })}
  };

 const handleOnError = (err, file, inputElem, reason) => {
    setStockPricesData([]);
  };

 const  handleOnRemoveFile = (data) => {
    setStockPricesData([]);
  };

  const handleClose=()=>{
      setOpen(false);
  }

  const postStockPrices =async () =>{
    let body = [];
    stockPricesData.map((stockPrice)=>{
    let temp={
        companyCode:stockPrice.companyCode,
        stockExchangeName:stockPrice.stockExchangeName,
        price:stockPrice.price,
        date:stockPrice.date,
        time:stockPrice.time
    }
    body.push(temp);
    })
  await Axios.post(url,body,{
    headers: {
        'Content-Type': 'application/json', 
      Authorization: `Bearer ${userInfo.token}`,
    }})
    .then((response)=>{
        setOpen(true);
    });
    body=[];
    setStockPricesData([]);
  }
  return (
    <div className={classes.paper}>
      <div className={classes.container}>
        <Typography className={classes.title}>Stock Prices File Uploader</Typography>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          config={{header:true}}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
          style={{
            dropArea: {
              borderColor: 'pink',
              borderRadius: 20,
              margin:'10px 10px'
            },
            dropAreaActive: {
              borderColor: 'red',
            },
            dropFile: {
              width: '100%',
              height: '100%',
              background: '#fff',
            },
            fileSizeInfo: {
              color: '#000',
              backgroundColor: '#fff',
              borderRadius: 3,
              lineHeight: 1,
              marginBottom: '0.5em',
            },
            fileNameInfo: {
              color: '#000',
              backgroundColor: '#fff',
              borderRadius: 3,
              fontSize: 14,
              lineHeight: 1,
              padding: '0 0.4em',
            },
            removeButton: {
              color: 'blue',
            },
            progressBar: {
              backgroundColor: 'pink',
            },
          }}
        >
          <Typography>Drop Excel file here or click to upload.</Typography>
        </CSVReader>
       
        <CustomButton className={classes.buttonStyle} onClick={postStockPrices}><Typography className={classes.buttonFont}>Post Stock Prices</Typography></CustomButton>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success">
    Stock Prices Added Succesfully!
  </Alert>
</Snackbar>
      </div>
    );
  }

  export default UploadStockPrices;