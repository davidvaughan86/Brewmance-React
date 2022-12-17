import Buttons from "./Buttons";

const Recipe = (props) => {
  return (
    <div className="recipe-style">
      <Buttons data={props} />
    </div>
  );
};

export default Recipe;
