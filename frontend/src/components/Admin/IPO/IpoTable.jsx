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
import moment from 'moment';
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

const IpoTable = ({ className, ipos, ...rest }) => {
  const classes = useStyles();
  const [selectedipoIds, setSelectedipoIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedipoIds;

    if (event.target.checked) {
      newSelectedipoIds = ipos.map((ipo) => ipo.id);
    } else {
      newSelectedipoIds = [];
    }

    setSelectedipoIds(newSelectedipoIds);
  };
  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedipoIds.indexOf(id);
    let newSelectedipoIds = [];

    if (selectedIndex === -1) {
      newSelectedipoIds = newSelectedipoIds.concat(selectedipoIds, id);
    } else if (selectedIndex === 0) {
      newSelectedipoIds = newSelectedipoIds.concat(selectedipoIds.slice(1));
    } else if (selectedIndex === selectedipoIds.length - 1) {
      newSelectedipoIds = newSelectedipoIds.concat(selectedipoIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedipoIds = newSelectedipoIds.concat(
        selectedipoIds.slice(0, selectedIndex),
        selectedipoIds.slice(selectedIndex + 1)
      );
    }

    setSelectedipoIds(newSelectedipoIds);
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
                  <Typography className={classes.tableFont}>Company Name</Typography>
                </TableCell>
                <TableCell>
                <Typography className={classes.tableFont}>Stock Exchange Name </Typography>
                </TableCell>
                <TableCell>
                <Typography className={classes.tableFont}>Open Date and Time </Typography>
                </TableCell>
                <TableCell>
                <Typography className={classes.tableFont}> View</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ipos.length>0?ipos.slice((page)*limit,(page)*limit+limit).map((ipo,index) => (
                <TableRow
                  hover
                  key={index}
                  selected={selectedipoIds.indexOf(ipo.id) !== -1}
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
                       <Typography className={classes.tableFont}>{ipo.companyName}</Typography>
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                  <Typography className={classes.tableFont}>{ipo.stockExchangeName}</Typography>  
                  </TableCell>
                  <TableCell>
                  <Typography className={classes.tableFont}>{moment(ipo.openDateTime).format('MMMM Do YYYY, h:mm a')}</Typography>  
                  </TableCell>
                  <TableCell>
                    <CustomButton variant="contained" color="primary" onClick={() => {
                      navigate(`/admin/viewIpo/${ipo.id}`);
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
        count={ipos.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[3,5, 10, 25]}
      />
    </Card>
  );
};

IpoTable.propTypes = {
  className: PropTypes.string,
  ipos: PropTypes.array.isRequired
};

export default IpoTable;
