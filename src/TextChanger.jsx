import React, { useEffect, useState } from "react";

export const TextChanger = () => {
  const text = [
    "Hi, I'm Arsalan Rather",
    "Hi, I'm Arsalan Rather",
    "Hi, I'm Arsalan Rather",
  ];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(text[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
      if (endValue > text[index].length + 10) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        setIndex((prev) => prev % text.length);
      }
    }, 30);
    return () => {
      clearInterval(intervalId);
    };
  }, [endValue, isForward, index, text]);
  return <div className="transition ease-in-out duration-300">{currentText}</div>;
};
