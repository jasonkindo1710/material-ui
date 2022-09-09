import { Typography, Button, Container } from "@material-ui/core";
import { AcUnitOutlined, Send, ArrowRight } from "@mui/icons-material";
import React from "react";

export default function Create() {
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

      <Button type="submit">Submit</Button>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<Send />}
        endIcon={<ArrowRight />}
      >
        Submit
      </Button>
      <br />
      <AcUnitOutlined />
      <AcUnitOutlined color="secondary" fontSize="large" />
      <AcUnitOutlined color="secondary" fontSize="small" />
      <AcUnitOutlined color="action" fontSize="small" />
      <AcUnitOutlined color="error" fontSize="small" />
      <AcUnitOutlined color="disabled" fontSize="small" />
    </Container>
  );
}
