import { PureComponent } from "react";
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
    </div>
  );
}
function MyPosts() {
  return (
    <>
      <MyPost
        image={posts[0].imageSrc}
        title={posts[0].title}
        description={posts[0].description}
      />
      <MyPost
        image={posts[1].imageSrc}
        title={posts[1].title}
        description={posts[1].description}
      />
      <MyPost
        image={posts[2].imageSrc}
        title={posts[2].title}
        description={posts[2].description}
      />
      <MyPost
        image={posts[3].imageSrc}
        title={posts[3].title}
        description={posts[3].description}
      />
    </>
  );
}

class ExerciseCDM extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { load: false };
    this.posts = posts;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        load: true,
      });
    }, 10000);
  }

  render() {
    let Posts;
    if (this.state.load) {
      Posts = <MyPosts />;
    } else {
      Posts = (
        <div className="loading">
          <div className="loader"></div>
        </div>
      );
    }
    return (
      <div className="container task2">
        <div className="head">
          <h1>Get post with componentDidMount</h1>
          <div className="underline"></div>
        </div>
        <div className="main">{Posts}</div>
      </div>
    );
  }
}
export default ExerciseCDM;
