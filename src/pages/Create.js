import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { ArrowRight, Send } from "@mui/icons-material";
import React from "react";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})

export default function Create() {
  const classes = useStyles()
  return (
    <Container>
      <Typography
      className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new note
      </Typography>

      <Button type="submit">Submit</Button>
      <Button
        className={classes.btn}
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<Send />}
        endIcon={<ArrowRight />}
      >
        Submit
      </Button>
  
    </Container>
  );
}
