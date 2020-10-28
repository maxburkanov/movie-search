import { getDefaultNormalizer } from "@testing-library/react";
import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

import "../App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

// .data.totalResults
export default (props) => {
  const {data, whatPage} = props.page;
  const {saveCurrentPage} = props;
  console.log('this is props from pagination', props)


  const paging = data.totalResults && Math.ceil(data.totalResults/10)
  const classes = useStyles();

  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    saveCurrentPage(value)
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={paging} page={page} onChange={handleChange} />
    </div>
  )
}


