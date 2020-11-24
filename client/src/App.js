import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/shiva.jpeg";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./appStyle";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/postsAction";

const App = () => {
  const [currentId, setCurrentId] = useState(0)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
        {/* //Grow component provides some simple animations  */}
      </AppBar>
      <Grow in>
        <Grid className={classes.maincontainer} container justify="space-between" alignItems="stretch" spacing={4}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId= {setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId= {setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;
