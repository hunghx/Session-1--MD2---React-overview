import React from "react";

export default function Box() {
  const handleclick = () => {
    window.alert("bạn vừa bấm vào box");
  };
  return <div onClick={handleclick}>Box</div>;
}
