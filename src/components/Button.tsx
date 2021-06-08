import React from "react";
interface Props {
  id: string;
  value: string;
  onClick: Function;
}
function Button(props: Props) {
  function handleClick(event: Object) {
    props.onClick(event);
  }
  return (
    <React.Fragment>
      <button id={props.id} onClick={handleClick}>
        {props.value}
      </button>
    </React.Fragment>
  );
}

export default Button;
