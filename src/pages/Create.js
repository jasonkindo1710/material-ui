import { Typography } from "@material-ui/core";
import React from "react";

export default function Create() {
  return (
    <div>
      <Typography variant="h1" color="primary" align="center">
        Create a new note
      </Typography>
      <Typography color="secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vehicula sed lectus non mollis. Fusce sit amet molestie ligula. Ut id
        libero turpis. Mauris bibendum, nibh sit amet elementum maximus, justo
        nisl ornare libero, nec cursus felis libero nec neque.
      </Typography>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        This is a new note
      </Typography>
    </div>
  );
}
