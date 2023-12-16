function Post(props) {
  console.log("the argument for this function is : ", props);
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
