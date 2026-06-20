import React from "react";

function Title () {
  const [title, setTitle] = React.useState("Hello World");
  const [subTitle, setSubTitle] = React.useState("Welcome to React");
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <button onClick={() => setTitle("Hello Taqiyyah")}>Change Title</button>
    </div>
  );
}

export default Title;