import {
    makeStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useNavigate } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';


const titleFont = "'Josefin Sans', sans-serif";
const Font = "'Josefin Sans', sans-serif";
const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        position: 'relative',
    },
    Title: {
        fontFamily: titleFont,
        margin:'15px 0 0 10px',
        fontSize: '25px',
        textAlign: 'left',
        color: '#3b4c58',
    },
    TabContainer: {
        width:'80%',
        margin: '60px auto',
        [theme.breakpoints.up('md')]: {
            width:'50%',
          },
    },
    Container:{
        width:'90%',
        margin:'40px auto',
    },
    lineStyle: {
        width: '70%',
        height: '0.5px',
         margin: '15px auto',
        backgroundColor: 'rgba(105,83,83,0.7)',
        opacity:0.5
    },
    TabTitle: {
        width: '100%',
        fontWeight:'bold',
        fontFamily: Font,
        fontSize: '20px',
        textAlign: 'Center',
        color: '#3b4c58',
        [theme.breakpoints.up('sm')]: {
            fontSize:'25px',
          },
        margin:'10px auto'
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
        color: '#3b4c58',
        margin:'10px auto',
        cursor: 'pointer',
        opacity:0.5
      },

}));



const Accordion = withStyles({
})(MuiAccordion);

const AccordionSummary = withStyles({
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function AdminMenu(props) {
    const classes = useStyles();
    const navigate = useNavigate(); 
    const [expanded, setExpanded] = React.useState(props.expanded);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    const handleViewCompany=()=>{
        navigate('/admin/companies');
    }
    const handleAddCompany=()=>{
        navigate('/admin/addCompany');
    }

    const handleViewExchange=()=>{
        navigate('/admin/exchanges');
    }

    const handleAddExchange=()=>{
        navigate('/admin/addExchange');
    }
    const handleViewIPOs=()=>{
        navigate('/admin/ipos');
    }

    const handleAddIPO=()=>{
        navigate('/admin/addIPO');
    }
    const handleAddStockPrice=()=>{
        navigate('/admin/addStockPrice');
    }

    const handleViewSectors=()=>{
        navigate('/admin/sectors');
    }

    const handleAddSectors=()=>{
        navigate('/admin/addSector');
    }
    return (
        <div className={classes.TabContainer}>
            <Typography className={classes.TabTitle}>Admin Services</Typography>
            <div className={classes.pape}> 
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className={classes.buttonFont} style={ props.companyMenuActive ? {'color':'#3b4c58',opacity:1 } : {}}>COMPANIES</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.Container}>
                <Typography variant="button" onClick={handleViewCompany} className={classes.buttonFont} style={ props.viewCompanyActive ? {'color':'#3b4c58',opacity:1 } : {}}>List of Companies</Typography>
            <hr className={classes.lineStyle} />
            <Typography variant="button" onClick={handleAddCompany} className={classes.buttonFont} style={ props.addCompanyActive ? {'color':'#3b4c58',opacity:1  } : {}}>Add Company</Typography>
            <hr className={classes.lineStyle} />
                </div>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className={classes.buttonFont} style={ props.exchangeMenuActive ? {'color':'#3b4c58',opacity:1 } : {}}>STOCK EXCHANGES</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.Container}>
                <Typography variant="button" onClick={handleViewExchange} className={classes.buttonFont} style={ props.viewExchangeActive ? {'color':'#3b4c58',opacity:1 } : {}}>List of Stock Exchanges</Typography>
            <hr className={classes.lineStyle} />
            <Typography variant="button" onClick={handleAddExchange} className={classes.buttonFont} style={ props.addExchangeActive ? {'color':'#3b4c58',opacity:1  } : {}}>Add Stock Exchange</Typography>
            <hr className={classes.lineStyle} />
                </div>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className={classes.buttonFont} style={ props.ipoMenuActive ? {'color':'#3b4c58',opacity:1 } : {}}>IPOS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.Container}>
                <Typography variant="button" onClick={handleViewIPOs} className={classes.buttonFont} style={ props.viewIPOActive ? {'color':'#3b4c58',opacity:1 } : {}}>List of IPOs</Typography>
            <hr className={classes.lineStyle} />
            <Typography variant="button" onClick={handleAddIPO} className={classes.buttonFont} style={ props.addIPOActive ? {'color':'#3b4c58',opacity:1  } : {}}>Add IPO</Typography>
            <hr className={classes.lineStyle} />
                </div>
        </AccordionDetails>
      </Accordion>      
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography className={classes.buttonFont} style={ props.stockPriceMenuActive ? {'color':'#3b4c58',opacity:1 } : {}}>STOCK PRICES</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.Container}>
            <Typography variant="button" onClick={handleAddStockPrice} className={classes.buttonFont} style={ props.addStockPriceActive ? {'color':'#3b4c58',opacity:1  } : {}}>Add Stock Price</Typography>
            <hr className={classes.lineStyle} />
                </div>
        </AccordionDetails>
      </Accordion>    
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography className={classes.buttonFont} style={ props.sectorMenuActive ? {'color':'#3b4c58',opacity:1 } : {}}>SECTORS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.Container}>
        <Typography variant="button" onClick={handleViewSectors} className={classes.buttonFont} style={ props.viewSectorActive ? {'color':'#3b4c58',opacity:1 } : {}}>List of Sectors</Typography>
            <hr className={classes.lineStyle} />
            <Typography variant="button" onClick={handleAddSectors} className={classes.buttonFont} style={ props.addSectorActive ? {'color':'#3b4c58',opacity:1  } : {}}>Add Sectors</Typography>
            <hr className={classes.lineStyle} />
                </div>
        </AccordionDetails>
      </Accordion>    
        </div>
        </div>
    );
}

export default AdminMenu;