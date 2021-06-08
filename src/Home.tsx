import React, { useEffect, useState } from "react";
import CheckBox from "./components/CheckBox";
import CheckMark from "./components/CheckMark";
import InputText from "./components/InputText";
import Label from "./components/Label";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Home(props: any) {
  const ref: any = React.createRef();
  const [inputState, updateInputState] = useState({
    name: false,
    card: false,
    cvv: false,
    date: false,
    checkBox: false,
    payNow: false,
  });
  const [inputValue, updateInputValue] = useState({
    name: "",
    card: "",
    cvv: "",
    date: "",
    checkBox: false,
  });
  useEffect(() => {
    if (
      inputState.name &&
      inputState.card &&
      inputState.cvv &&
      inputState.date
    ) {
      updateInputState(Object.assign({}, inputState, { payNow: true }));
    }
  }, [inputValue]);

  const handleKeyUp = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === "name") {
      updateInputValue(Object.assign({}, inputValue, { name: value }));
      if (value.length > 3) {
        updateInputState(Object.assign({}, inputState, { name: true }));
      } else {
        updateInputState(Object.assign({}, inputState, { name: false }));
      }
    } else if (id === "password") {
      updateInputValue(Object.assign({}, inputValue, { cvv: value }));
      if (value.length == 3) {
        updateInputState(Object.assign({}, inputState, { cvv: true }));
      } else {
        updateInputState(Object.assign({}, inputState, { cvv: false }));
      }
    } else if (id === "cardNumber") {
      updateInputValue(Object.assign({}, inputValue, { card: value }));
      if (value.length == 19) {
        updateInputState(Object.assign({}, inputState, { card: true }));
      } else {
        updateInputState(Object.assign({}, inputState, { card: false }));
      }

      let newval = "";
      let val = value;
      val = val.replace(/\D+/g, "");
      val = val.replace(/\s/g, "");

      // iterate to letter-spacing after every 4 digits
      for (let i = 0; i < val.length; i++) {
        if (i % 4 == 0 && i > 0) newval = newval.concat(" ");
        newval = newval.concat(val[i]);
      }
      ref.current.value = newval;
    } else if (id === "date") {
      updateInputState(Object.assign({}, inputState, { date: true }));
      updateInputValue(Object.assign({}, inputValue, { date: value }));
    } else {
    }
  };
  const onCheckBoxClick = (event: any) => {
    const className = event.target.className;
    if (className == "checkbox-checkmark-disabled") {
      updateInputState(Object.assign({}, inputState, { checkBox: true }));
    } else {
      updateInputState(Object.assign({}, inputState, { checkBox: false }));
    }
  };

  function handleClick(event: Object) {
    props.onClick(event);
  }
  return (
    <div className="card">
      <div className="container">
        <div>
          <h2>Your Payment Details</h2>
        </div>
        <div>
          <div>
            <Label value="CARDHOLDER NAME"></Label>
          </div>
          <div>
            <InputText
              type="text"
              id="name"
              maxLength={24}
              onHandleKeyUp={handleKeyUp}
            ></InputText>
            <CheckMark active={inputState.name}></CheckMark>
          </div>
        </div>
        <div>
          <div>
            <Label value="CARD NUMBER"></Label>
          </div>
          <div>
            <InputText
              type="text"
              ref={ref}
              id="cardNumber"
              maxLength={19}
              onHandleKeyUp={handleKeyUp}
            ></InputText>
            <CheckMark active={inputState.card}></CheckMark>
          </div>
        </div>
        <div>
          <div>
            <div>
              <Label value="EXPIRATION DATE"></Label>
            </div>
            <div>
              <InputText
                type="date"
                id="date"
                maxLength={19}
                onHandleKeyUp={handleKeyUp}
              ></InputText>
            </div>{" "}
          </div>
          <div>
            <div>
              <Label value="CVV"></Label>
            </div>
            <div>
              <InputText
                type="password"
                id="password"
                maxLength={3}
                onHandleKeyUp={handleKeyUp}
              ></InputText>
              <CheckMark active={inputState.cvv}></CheckMark>
            </div>
          </div>
        </div>
        <div>
          <div>
            <CheckBox
              active={inputState.checkBox}
              onClick={onCheckBoxClick}
            ></CheckBox>
            <span className="checkbox-label">
              Save my details for future payments
            </span>
          </div>
        </div>
        <div>
          <Link
            className={`${
              inputState.payNow ? "link-style-active" : "link-style-disabled"
            }`}
            to="/details"
          >
            Pay Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
