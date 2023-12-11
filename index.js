zconst Button = (props) => {
  //  Write your code here.
  const {heading, btnText} = props
  return(
  <div className = "background">
    <h1 className = heading>{heading}</h1>
    <button className = {btnText}>{btnText}</button>
  </div>;
  )
};

const element = (
  //  Write your code here.
  <Button btnText="like" heading = "Social Buttons"/>
  <Button btnText="comment" heading = "Social Buttons"/>
  <Button btText="share" heading = "Social Buttons" />
);

ReactDOM.render(element, document.getElementById("root"));
