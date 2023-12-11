const Button = (props) => {
  //  Write your code here.
  const {heading, btn-text} = props
  return{
  <div className = "background">
    <h1 className = {heading}>{heading}</h1>
    <button className = {btn-text}>{btn-text}</button>
  </div>;
  }
};

const element = (
  //  Write your code here.
  <Button heading = "Social Buttons"/>
  <Button btn-text="like"/>
  <Button btn-text="comment"/>
  <Button btn-text="share"/>
);

ReactDOM.render(element, document.getElementById("root"));
