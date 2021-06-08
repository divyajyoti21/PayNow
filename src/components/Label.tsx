import React from "react";

function Label(props: { value: string }) {
  return (
    <React.Fragment>
      <label>{props.value}</label>
    </React.Fragment>
  );
}

export default Label;
