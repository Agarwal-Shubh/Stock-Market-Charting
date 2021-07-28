import { Button, IconButton, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router';


const buttonFont = "'Josefin Sans', sans-serif";
const subHeaderFont = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
    grow: {
     flexGrow: 1,
    },
    header: {
        background: '#fff',
        [theme.breakpoints.up('sm')]: {
            padding: '10px 20px',
          },
          justifyContent:'space-between'
    },
    logo: {
        //height:'60px',
        width: '80%',
        cursor: 'pointer'
    },
    HeaderText:{
      fontFamily:subHeaderFont,
      fontSize:'13px',
      fontWeight:'600',
      textAlign:'center',
      verticalAlign:'middle',
      color:'#3b4c58',
      margin:'10px 15px',
      width:'100%'
    },
    serviceDiv:{
        alignItems:'right'
    }
  }));






function Header(props){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const handleMenuClose = () => {
        setAnchorEl(null);
      };

    const handleMenuClick = (event) => {
        userInfo?setAnchorEl(event.currentTarget):navigate('/login');
      };
    
    const handleCompanyClick=()=>{
        navigate('/companies');
    }
    
    const handleSectorClick=()=>{
        navigate('/sectors');
    }
    
    const handleExchangeClick=()=>{
        navigate('/exchanges');
    }
    const handleIPOClick=()=>{
        navigate('/ipos');
    }
    
    const handleAdminClick=()=>{
      navigate('/admin/companies');
      setAnchorEl(null);
    }
    const handleSignOut=()=>{
        dispatch(signout());
        setAnchorEl(null);
    }
    const handleHomeClick=()=>{
        navigate('/');
    }
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
      {userInfo && userInfo.admin ? <MenuItem onClick={handleAdminClick}>Admin Panel</MenuItem> :''}  
        <MenuItem>My Account</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>

      </Menu>
    );


    return (
      <div className={classes.grow}>
        <AppBar position="static" >
          <Toolbar className={classes.header}>
            <div>
          <Button onClick={handleHomeClick}><Typography className={classes.HeaderText}>Stock Market Charting</Typography></Button>
            </div>
            <div className={classes.serviceDiv} >
            <Button onClick={handleCompanyClick}><Typography className={classes.HeaderText}>Companies</Typography></Button>
            <Button onClick={handleExchangeClick} ><Typography className={classes.HeaderText}>Stock Exchanges</Typography></Button>
            <Button onClick={handleSectorClick}><Typography className={classes.HeaderText}>Sectors</Typography></Button>
            <Button onClick={handleIPOClick}><Typography className={classes.HeaderText}>IPOs</Typography></Button>
            </div>
            <div>
            <IconButton
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuClick}
              color="inherit"
            >
            <AccountCircleOutlinedIcon fontSize="large" style={{color:'#3b4c58'}} />
            </IconButton>
            </div>
          </Toolbar>
          
        </AppBar>
        <div style={{backgroundColor:'#f8f8f8',height:'5px'}} />
        {renderMenu}
      </div>
    );
}

export default Header;