import { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

let posts = [
  {
    id: 1,
    title: "Butterfly",
    description:
      "Butterflies are beautiful insects that undergo a remarkable transformation from caterpillar to butterfly. They come in various vibrant colors and are known for their graceful flight.",
    imageSrc: "https://alinabizadeh1913.github.io/React_Exercise/img/01.jpg",
  },
  {
    id: 2,
    title: "Beach",
    description:
      "The beach is a tranquil oasis with soothing waves and warm sand, offering a peaceful retreat from the chaos of daily life.",
    imageSrc: "https://alinabizadeh1913.github.io/React_Exercise/img/02.jpg",
  },
  {
    id: 3,
    title: "Flower",
    description:
      "Flowers are nature's delicate gems, blooming in vibrant hues and spreading joy with their sweet fragrance.",
    imageSrc: "https://alinabizadeh1913.github.io/React_Exercise/img/03.jpg",
  },
  {
    id: 4,
    title: "Eagle",
    description:
      "The eagle soars majestically in the sky, a symbol of strength, freedom, and perseverance.",
    imageSrc: "https://alinabizadeh1913.github.io/React_Exercise/img/04.jpg",
  },
];

function MyPost({ image, title, description, moreInfo }) {
  return (
    <div className="post">
      <img src={image} alt="" />
      <h2 className="title">{title}</h2>
      <p>{description}</p>
      <button>More Info...</button>
    </div>
  );
}

class ExerciseCDU extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { id: "3" };
    this.handleClick = this.handleClick.bind(this);
    this.posts = posts;
  }

  handleClick(e) {
    this.setState({
      id: e.target.id,
    });
  }

  render() {
    return (
      <div className="container task1">
        <div className="head">
          <h1>Change the post using componentDidUpdate</h1>
          <div className="underline"></div>
        </div>
        <div className="main">
          <div className="nav">
            <button className="navitem" onClick={this.handleClick} id="0">
              <FontAwesomeIcon icon={faFileLines} className="icon" />
              Butterfly
            </button>
            <button className="navitem" onClick={this.handleClick} id="1">
              <FontAwesomeIcon icon={faFileLines} className="icon" />
              Beach
            </button>
            <button className="navitem" onClick={this.handleClick} id="2">
              <FontAwesomeIcon icon={faFileLines} className="icon" />
              Flower
            </button>
            <button className="navitem" onClick={this.handleClick} id="3">
              <FontAwesomeIcon icon={faFileLines} className="icon" />
              Eagle
            </button>
          </div>
          <MyPost
            image={posts[this.state.id].imageSrc}
            title={posts[this.state.id].title}
            description={posts[this.state.id].description}
          />
        </div>
      </div>
    );
  }
}
export default ExerciseCDU;
