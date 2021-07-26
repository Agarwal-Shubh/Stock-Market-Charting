import { Grid, makeStyles, TextField, Typography, useFormControl } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Multiselect from 'multiselect-react-dropdown';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCompany, deleteCompany, editCompany } from '../../../redux/actions/companyActions';
import CustomButton from '../../Elements/Button';
const Font = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        position: 'relative',
    },
    Title: {
        fontFamily: Font,
        margin:'15px 0 0 10px',
        fontSize: '25px',
        textAlign: 'left',
        color: '#3b4c58',
    },
    Container:{
        width:'90%',
        margin:'40px auto',
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
      section: {
        border: '#000 1px solid',
        margin: '12px',
        padding: '5px',
        width: '100%'
      },
      paddingAdjust: {
        padding: '5px 10px !important'
      },
      itemsFlex: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0px 10px'
      },
      itemBlock: {
        backgroundColor: '#fffdd0',
        margin: '5px',
        padding: '3px 5px',
        fontSize: '16px'
      },
      itemDel: {
        color: 'red',
        marginLeft: '5px',
        cursor: "pointer"
      },

}));

function Form(props){
    const classes= useStyles();
    const [flag,setFlag]=useState(props.flag);
    const [isDisabled,setDisabled] = useState(flag==="0"?false:true);
    const [id,setId] = useState(props.company?props.company.id:'');
    const [name,setName] = useState(props.company?props.company.name:'');
    const [ceo,setCeo] = useState(props.company?props.company.ceo:'');
    const [code,setCode] = useState(props.company?props.company.code:'');
    const [turnOver,setTurnOver] = useState(props.company?props.company.turnover:0);
    const [sectorName,setSectorName] = useState(props.company?props.company.sectorName:'');
    const [exchangeNames,setExchangeNames] = useState(props.company?props.company.exchangeNames:[]);
    const [description,setDesc] = useState(props.company?props.company.description:'');
    const [bod,setBod]= useState(props.company?props.company.bod:'');
    const [bodInput,setBodInput] = useState();
    const sectorList = useSelector((state)=>state.sectorList);
    const {sectors} = sectorList;
    const exchangeList = useSelector((state)=>state.exchangeList);
    const {exchanges} = exchangeList;
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleBodChange = (event) => {
        setBodInput(event.target.value);
      }
      const handleAddBod = () => {
        if(bodInput !== ''){
          let tempArray = [...bod];
          let add = [];
          add = bodInput.split(';');
          for(var i in add){
            tempArray.push(add[i].toLowerCase());
          }
          setBodInput("");
          setBod(tempArray);
          console.log("BODs", bod);
        }
      }
      const handleRemoveBod = (e) => {
        const data = e.currentTarget.getAttribute("name");
        if(!isDisabled){
          setBod(bod.filter(item => item !== data));
        }
      }
      const onExchangeSelect=(e,newVal)=>{
        let tempArray=[...exchangeNames];
        console.log(tempArray);
        tempArray.push(newVal.name);
        setExchangeNames(tempArray);
        console.log(exchangeNames);
      }

      const onExchangeRemove=(e,newVal)=>{
            setExchangeNames(exchangeNames.filter(item => item !== newVal.name));
      }

      const handleRemove=()=>{
          dispatch(deleteCompany(id));
          navigate('/admin/companies');
      }

      const onSubmit=(e)=>{
          if(props.flag==0){
            e.preventDefault();
            let body = {
                name:name,
                ceo:ceo,
                bod:bod,
                code:code,
                turnover:turnOver,
                description:description,
                sectorName:sectorName,
                exchangeNames:exchangeNames
            }
  
            dispatch(addCompany(body));
          }
          else if(props.flag==1){
            e.preventDefault();
            let body = {
                id:id,
                name:name,
                ceo:ceo,
                bod:bod,
                code:code,
                turnover:turnOver,
                description:description,
                sectorName:sectorName,
                exchangeNames:exchangeNames
            }
            dispatch(editCompany(body));
        //   console.log('body',body);
          }
          setDisabled(true);
          setFlag(1);
      }

      const handleEdit=(e)=>{
      flag==0?setFlag("1"):setFlag("0");
          setDisabled(!isDisabled);
      }

    return(
        <div>
            <form style={{ width: '100%',marginTop:'60px' }}>
                <Grid container className={classes.paper} spacing={3}>
                    <Grid item xs={6}>
                        <TextField label="Name" value={name} disabled={isDisabled} variant="outlined" style={{ width: '100%' }} required onChange={(e)=>setName(e.target.value)}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="CEO" value={ceo} disabled={isDisabled} variant="outlined" style={{ width: '100%' }} required onChange={(e)=>setCeo(e.target.value)}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Code" value={code} disabled={isDisabled} variant="outlined" style={{ width: '100%' }} required onChange={(e)=>setCode(e.target.value)}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Turnover" value={turnOver} disabled={isDisabled} variant="outlined" style={{ width: '100%' }} required onChange={(e)=>setTurnOver(e.target.value)}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Description" value={description} multiline minRows={5} disabled={isDisabled} variant="outlined" style={{ width: '100%' }} onChange={(e)=>setDesc(e.target.value)}/>
                    </Grid>
                    <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                        <Autocomplete
             id="sector"
             options={sectors}
             onChange={(e,newVal)=>setSectorName(newVal?newVal.name:'')}
             getOptionLabel={(option) => option.name}
             style={{ width: '100%' }}
             disabled={isDisabled}
             renderInput={(params) => <TextField {...params} label={sectorName!==''?sectorName:"Sector Name"} variant="outlined" value={sectorName} style={{ width: '100%' }}/>}
              
              />
                        </Grid>
                        <Grid item xs={12}>
                        <Multiselect
                options={exchanges} 
                selectedValues={exchanges}
                onSelect={(e,newVal)=>onExchangeSelect(e,newVal)} 
                onRemove={(e,newVal)=>onExchangeRemove(e,newVal)} 
                displayValue="name" 
                placeholder="Stock Exchange Names"
                disable={isDisabled}
                />
              
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid container className={classes.section}>
            <Grid item xs={12} className={classes.paddingAdjust}>
              <Typography style={{ fontWeight: 'bold' }}>Add Board of Directors<i style={{ fontWeight: '400' }}>  </i><span style={{color:'red'}}></span></Typography>
            </Grid>
            <Grid item xs={5} className={classes.paddingAdjust}>
              <TextField
                label="Board Of Directors"
                name="BOD"
                variant="standard"
                value={bodInput}
                disabled={isDisabled}
                style={{ width: '100%' }}
                onChange={handleBodChange}
              >
              </TextField>
            </Grid>
            <Grid item xs={7} className={classes.paddingAdjust} >
              <CustomButton variant="contained" color="primary" onClick={handleAddBod} disabled={isDisabled}>+</CustomButton>
            </Grid >
            <Grid item xs={12} className={classes.itemsFlex}>
              {bod && bod.map((option, index) => (
                <div key={index} value={option} className={classes.itemBlock}>
                  {option}
                  <span name={option} onClick={handleRemoveBod} className={classes.itemDel}>X</span>
                </div>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6}>
              {flag=="1"?<CustomButton className={classes.buttonStyle} onClick={handleEdit}><Typography className={classes.buttonFont}>Edit</Typography></CustomButton>:<CustomButton className={classes.buttonStyle} onClick={onSubmit}><Typography className={classes.buttonFont}>Submit</Typography></CustomButton>}
              
          </Grid>
          <Grid item xs={6}>
          {flag=="1"?<CustomButton className={classes.buttonStyle} onClick={handleRemove} ><Typography className={classes.buttonFont}>Delete</Typography></CustomButton>:''}
          </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Form;
