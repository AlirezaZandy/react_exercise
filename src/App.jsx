import "./App.css";
import ExerciseCDU from "./Components/ChangePostUsingCDU.jsx";
import ExerciseCDM from "./Components/GetPostinCDM.jsx";
import PostWithComment from "./Components/ShowPostWithComment.jsx";
import FuncComp from "./Components/ShowPostWithFunctionalComponent.jsx";
import ClassComp from "./Components/ShowPostWithClassComponent.jsx";

function App() {
  return (
    <div>
      <ExerciseCDU />
      <ExerciseCDM />
      <PostWithComment />
      <FuncComp />
      <ClassComp />
    </div>
  );
}

export default App;
