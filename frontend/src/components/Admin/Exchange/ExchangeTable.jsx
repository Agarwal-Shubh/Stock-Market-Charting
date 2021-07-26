import {
    Box, Button, Card, makeStyles, Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Elements/Button';
const Font = "'Josefin Sans', sans-serif";

const useStyles = makeStyles((theme) => ({
  root: {
      fontFamily:Font
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  tableFont:{
      fontFamily:Font,
      textAlign:'center'
  }
}));

const ExchangeTable = ({ className, exchanges, ...rest }) => {
  const classes = useStyles();
  const [selectedcompanyIds, setSelectedcompanyIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedcompanyIds;

    if (event.target.checked) {
      newSelectedcompanyIds = exchanges.map((exchange) => exchange.id);
    } else {
      newSelectedcompanyIds = [];
    }

    setSelectedcompanyIds(newSelectedcompanyIds);
  };
  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedcompanyIds.indexOf(id);
    let newSelectedcompanyIds = [];

    if (selectedIndex === -1) {
      newSelectedcompanyIds = newSelectedcompanyIds.concat(selectedcompanyIds, id);
    } else if (selectedIndex === 0) {
      newSelectedcompanyIds = newSelectedcompanyIds.concat(selectedcompanyIds.slice(1));
    } else if (selectedIndex === selectedcompanyIds.length - 1) {
      newSelectedcompanyIds = newSelectedcompanyIds.concat(selectedcompanyIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedcompanyIds = newSelectedcompanyIds.concat(
        selectedcompanyIds.slice(0, selectedIndex),
        selectedcompanyIds.slice(selectedIndex + 1)
      );
    }

    setSelectedcompanyIds(newSelectedcompanyIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };


  const navigate = useNavigate();
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography className={classes.tableFont}>Name</Typography>
                </TableCell>
                <TableCell>
                <Typography className={classes.tableFont}>   Remarks</Typography>
                </TableCell>
                <TableCell>
                <Typography className={classes.tableFont}> View</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exchanges.length>0?exchanges.slice((page)*limit,(page)*limit+limit).map((exchange,index) => (
                <TableRow
                  hover
                  key={index}
                  selected={selectedcompanyIds.indexOf(exchange.id) !== -1}
                >
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                       <Typography className={classes.tableFont}>{exchange.name}</Typography>
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                  <Typography className={classes.tableFont}>{exchange.remarks}</Typography>  
                  </TableCell>
                  <TableCell>
                    <CustomButton variant="contained" color="primary" onClick={() => {
                      navigate(`/admin/viewExchange/${exchange.id}`);
            }}>
                      <Typography className={classes.tableFont}>View</Typography>  
                    </CustomButton>
                  </TableCell>
                </TableRow>
              )):''}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={exchanges.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[3,5, 10, 25]}
      />
    </Card>
  );
};

ExchangeTable.propTypes = {
  className: PropTypes.string,
  exchanges: PropTypes.array.isRequired
};

export default ExchangeTable;
