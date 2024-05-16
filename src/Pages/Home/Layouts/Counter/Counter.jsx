import React, { useState, useEffect, useRef } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const targetCount = 150;
  const intervalDuration = 40;
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    let timer;
    if (hasStarted) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < targetCount) {
            return prevCount + 1;
          } else {
            clearInterval(timer);
            return prevCount;
          }
        });
      }, intervalDuration);
    }

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <div className="counter" ref={counterRef}>
      <div className="clients">
        <h2>companies we have worked with</h2>
        {count}+</div>
      <div className="clients">
        <h2>schools we have worked with</h2>
        {count + 30}+</div>
      <div className="clients">
        <h2>individual we have worked with</h2>
        {count + 80}+</div>
    </div>
  );
};

export default Counter;
