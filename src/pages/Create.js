import {
  Button,
  Container,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import { ArrowRight, Send } from "@mui/icons-material";
import React, { useState } from "react";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState('')
  const [detailsError, setDetailsError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if(title === ''){
      setTitleError(true)
    }
    if(details === ''){
      setDetailsError(true)
    }
    if(title && details){
      console.log(title, details);
    }
  }
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
        onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <Button
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<Send />}
        endIcon={<ArrowRight />}
      
      >
        Submit
      </Button>
      </form>

      
    </Container>
  );
}
