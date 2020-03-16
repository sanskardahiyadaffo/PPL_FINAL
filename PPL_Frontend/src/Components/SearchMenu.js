import React from "react";
import { Redirect } from "react-router-dom";

export default function SearchMenu(props) {
  const q = props.location.state.q;
  if (q) {
    props.location.state = {};
    console.log(q, props.allPost, "This is search bar");
    return <div></div>;
  } else {
    return <Redirect from="*" to="/myindex" />;
  }
}
