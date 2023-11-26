const names = ["Max", "Man"];

function Post() {
  //   const chosenName = Math.floor(Math.random() * names.length);
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>{2 + 2}</p>
      <p>React.js is awesome</p>
    </div>
  );
}

export default Post;
