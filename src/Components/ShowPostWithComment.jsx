import { PureComponent } from "react";
let posts = [
  {
    id: 1,
    title: "Butterfly",
    description:
      "Butterflies are beautiful insects that undergo a remarkable transformation from caterpillar to butterfly. They come in various vibrant colors and are known for their graceful flight.",
    imageSrc: "https://alinabizadeh1913.github.io/React_Exercise/img/01.jpg",
    comments: [
      "Butterflies are nature's flying artwork.",
      "The delicate beauty of butterflies is simply enchanting.",
    ],
  },
  {
    id: 2,
    title: "Beach",
    description:
      "The beach is a tranquil oasis with soothing waves and warm sand, offering a peaceful retreat from the chaos of daily life.",
    imageSrc: "https://alinabizadeh1913.github.io/React_Exercise/img/02.jpg",
    comments: [
      "The beach is my happy place where I can feel the soothing breeze, hear the calming sound of the waves, and bask in the warmth of the sun. It's a tranquil escape from the hustle and bustle of daily life.",
    ],
  },
  {
    id: 3,
    title: "Flower",
    description:
      "Flowers are nature's delicate gems, blooming in vibrant hues and spreading joy with their sweet fragrance.",
    imageSrc: "https://alinabizadeh1913.github.io/React_Exercise/img/03.jpg",
    comments: [
      "Flowers are more than just blooms; they are nature's exquisite artwork, painting the world with vibrant hues and delicate beauty.",
      "The enchanting fragrance of a flower not only pleases the senses but also uplifts the spirit, filling the heart with joy and serenity.",
      "Each petal of a flower tells a story of resilience and grace, standing as a testament to the wonders of nature's creation.",
    ],
  },
  {
    id: 4,
    title: "Eagle",
    description:
      "The eagle soars majestically in the sky, a symbol of strength, freedom, and perseverance.",
    imageSrc: "https://alinabizadeh1913.github.io/React_Exercise/img/04.jpg",
    comments: [
      "The eagle symbolizes power, freedom, and courage, soaring high above with majestic grace.",
      "With keen eyes and swift wings, the eagle embodies strength and determination, a true ruler of the sky.",
    ],
  },
];

function MyPost({ post }) {
  const comments = post.comments.map((comment, i) => (
    <div className="comment" key={i}>
      {comment}
    </div>
  ));
  return (
    <div className="post">
      <img src={post.imageSrc} alt="" />
      <h2 className="title">{post.title}</h2>
      <p>{post.description}</p>
      <div className="chead">
        <div className="title">Comments:</div>
        <div className="underline"></div>
      </div>
      <div className="comments">{comments}</div>
    </div>
  );
}

class PostWithComment extends PureComponent {
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
      <div className="container task3">
        <div className="head">
          <h1>Change post using componentDidUpdate</h1>
          <div className="underline"></div>
        </div>
        <div className="main">
          <div className="nav">
            <button className="navitem" onClick={this.handleClick} id="0">
              <i id="icon" className="">
                @
              </i>
              Butterfly
            </button>
            <button className="navitem" onClick={this.handleClick} id="1">
              <i id="icon" className="">
                @
              </i>
              Beach
            </button>
            <button className="navitem" onClick={this.handleClick} id="2">
              <i id="icon" className="">
                @
              </i>
              Flower
            </button>
            <button className="navitem" onClick={this.handleClick} id="3">
              <i id="icon" className="">
                @
              </i>
              Eagle
            </button>
          </div>
          <MyPost post={this.posts[this.state.id]} />
        </div>
      </div>
    );
  }
}

export default PostWithComment;
