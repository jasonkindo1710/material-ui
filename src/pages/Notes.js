import { Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'


export default function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} md={3}> 
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid>
    </div>
  )
}
