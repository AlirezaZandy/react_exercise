import { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faDna,faBriefcase } from "@fortawesome/free-solid-svg-icons";

let postList = [
  {
    id: "0",
    name: "Lily Thompson",
    bio: "my name is Lily Thompson",
    job: "UX/UI Designer",
  },
  {
    id: "1",
    name: "William Johnson",
    bio: "my name is William Johnson",
    job: "Data Scientist",
  },
  {
    id: "2",
    name: "Olivia White",
    bio: "my name is Olivia White",
    job: "Cybersecurity Analyst",
  },
  {
    id: "3",
    name: "Ethan Carter",
    bio: "my name is Ethan Carter",
    job: "Full Stack Developer",
  },
];

function MyPost({ props }) {
  return (
    <div className="post">
      <div className="name"><FontAwesomeIcon icon={faUser} className="icon"/>{props.name}</div>
      <div className="bio"><FontAwesomeIcon icon={faDna} className="icon"/>{props.bio}</div>
      <div className="job"><FontAwesomeIcon icon={faBriefcase} className="icon"/>{props.job}</div>
    </div>
  );
}


class ClassComp extends PureComponent  {
  constructor(props) {
    super(props);
    this.state = { posts: postList };
  }
  
  render() {
    const postsren = this.state.posts.map((p, i) => <MyPost props={p} key={i}/>);
    return (
      <div className="container task5">
        <div className="head">
          <h1>Show posts with class component</h1>
          <div className="underline"></div>
        </div>
        <div className="main">{postsren}</div>
      </div>
    );
  }
}



export default ClassComp;
