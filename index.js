const Button = (props) => {
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
  <Button heading = "Social Buttons"/>
  <Button btnText="like"/>
  <Button btnText="comment"/>
  <Button btText="share"/>
);

ReactDOM.render(element, document.getElementById("root"));
