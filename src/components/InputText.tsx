import React, { forwardRef } from "react";
interface Props {
  type: string;
  id: string;
  onHandleKeyUp: any;
  maxLength: number;
  ref: Object;
}
const InputText = React.forwardRef((props: Props, ref: any) => {
  function handleKeyUp(event: Object) {
    props.onHandleKeyUp(event);
  }
  return (
    <React.Fragment>
      <input
        type={props.type}
        id={props.id}
        onChange={handleKeyUp}
        maxLength={props.maxLength}
        ref={ref}
        required
      ></input>
    </React.Fragment>
  );
});

export default InputText;
