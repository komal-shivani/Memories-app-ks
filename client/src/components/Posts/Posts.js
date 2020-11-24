import React from "react";
import Post from "./Post/Post";
import useStyles from "./postsStyle";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  // useSelector ae used to fetch the data
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    posts.lenght ? <CircularProgress /> : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3} >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId= {setCurrentId} />
        </Grid>
      ))}
    </Grid>
    )
  );
};

export default Posts;
