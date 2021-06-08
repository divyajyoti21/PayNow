import React from "react";

function CheckBox(props: { active: boolean; onClick: Function }) {
  function checkBoxCheck(event: Object) {
    props.onClick(event);
  }
  return (
    <React.Fragment>
      <span
        className={`${
          props.active
            ? "checkbox-checkmark-active"
            : "checkbox-checkmark-disabled"
        }`}
        onClick={checkBoxCheck}
      ></span>
    </React.Fragment>
  );
}

export default CheckBox;
