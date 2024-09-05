import { useState } from "react";

let postList = [
  {
    id: "0",
    name: "Lily Thompson",
    bio: "My name is Lily Thompson",
    job: "UX/UI Designer",
  },
  {
    id: "1",
    name: "William Johnson",
    bio: "My name is William Johnson",
    job: "Data Scientist",
  },
  {
    id: "2",
    name: "Olivia White",
    bio: "My name is Olivia White",
    job: "Cybersecurity Analyst",
  },
  {
    id: "3",
    name: "Ethan Carter",
    bio: "My name is Ethan Carter",
    job: "Full Stack Developer",
  },
];

function MyPost({ props }) {
  return (
    <div className="post">
      <div className="name"><i className="icon">@</i>{props.name}</div>
      <div className="bio"><i className="icon">@</i>{props.bio}</div>
      <div className="job"><i className="icon">@</i>{props.job}</div>
    </div>
  );
}

function FuncComp() {
    const [state, setState] = useState({ posts: postList });
  const postsren = state.posts.map((p, i) => <MyPost props={p} key={i}/>);
  return (
      <div className="container task4">
        <div className="head">
          <h1>Show posts with functional component</h1>
          <div className="underline"></div>
        </div>
        <div className="main">{postsren}</div>
      </div>
  );
}
export default FuncComp;
