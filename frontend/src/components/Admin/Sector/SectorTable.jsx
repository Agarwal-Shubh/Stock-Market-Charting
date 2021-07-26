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

const SectorTable = ({ className, sectors, ...rest }) => {
  const classes = useStyles();
  const [selectedsectorIds, setSelectedsectorIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedsectorIds;

    if (event.target.checked) {
      newSelectedsectorIds = sectors.map((sector) => sector.id);
    } else {
      newSelectedsectorIds = [];
    }

    setSelectedsectorIds(newSelectedsectorIds);
  };
  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedsectorIds.indexOf(id);
    let newSelectedsectorIds = [];

    if (selectedIndex === -1) {
      newSelectedsectorIds = newSelectedsectorIds.concat(selectedsectorIds, id);
    } else if (selectedIndex === 0) {
      newSelectedsectorIds = newSelectedsectorIds.concat(selectedsectorIds.slice(1));
    } else if (selectedIndex === selectedsectorIds.length - 1) {
      newSelectedsectorIds = newSelectedsectorIds.concat(selectedsectorIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedsectorIds = newSelectedsectorIds.concat(
        selectedsectorIds.slice(0, selectedIndex),
        selectedsectorIds.slice(selectedIndex + 1)
      );
    }

    setSelectedsectorIds(newSelectedsectorIds);
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
                <Typography className={classes.tableFont}>   Brief</Typography>
                </TableCell>
                <TableCell>
                <Typography className={classes.tableFont}> View</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sectors.length>0?sectors.slice((page)*limit,(page)*limit+limit).map((sector,index) => (
                <TableRow
                  hover
                  key={index}
                  selected={selectedsectorIds.indexOf(sector.id) !== -1}
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
                       <Typography className={classes.tableFont}>{sector.name}</Typography>
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                  <Typography className={classes.tableFont}>{sector.brief}</Typography>  
                  </TableCell>
                  <TableCell>
                    <CustomButton variant="contained" color="primary" onClick={() => {
                      navigate(`/admin/viewSector/${sector.id}`);
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
        count={sectors.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[3,5, 10, 25]}
      />
    </Card>
  );
};

SectorTable.propTypes = {
  className: PropTypes.string,
  sectors: PropTypes.array.isRequired
};

export default SectorTable;
