import {
  Button,
  Container,
  makeStyles,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core";
import { ArrowRight, Send } from "@mui/icons-material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState("");
  const [detailsError, setDetailsError] = useState("");
  const [category, setCategory] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch('http://localhost:8080/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => history.push('/'))
    }
  };
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
        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel control={<Radio/>} label="Money" value="money"/>
          <FormControlLabel control={<Radio/>} label="Todos" value="todos"/>
          <FormControlLabel control={<Radio/>} label="Reminders" value="reminders"/>
          <FormControlLabel control={<Radio/>} label="Work" value="work"/>
        </RadioGroup>
        </FormControl>
        

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
