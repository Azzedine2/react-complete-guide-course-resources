import classes from "./Post.module.css";

function Post(props) {
  return (

  <div className={classes.post}>
  <p className={classes.author}></p>
  <p className={classes.text}></p>

  </div>
  );
}

export default ;
