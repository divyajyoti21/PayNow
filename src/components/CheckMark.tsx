import React from "react";

function CheckMark(props: { active: boolean }) {
  return (
    <React.Fragment>
      <span
        className={`${
          props.active ? "success-checkmark" : "disabled-checkmark"
        }`}
      ></span>
    </React.Fragment>
  );
}

export default CheckMark;
