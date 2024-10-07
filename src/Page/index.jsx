import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import arrowIcon from "../Images/arrow.svg";

const Page = ({ image, subtitle, title, onScrollToNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, []);

  return (
    <div className="page-section" ref={pageRef}>
      <div
        className={`page-image ${isVisible ? "spring" : ""}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="page-content">
          <p
            className={`page-subtitle ${
              isVisible ? "subtitle-flow-in" : "subtitle-flow-out"
            }`}
          >
            {subtitle}
          </p>
          <h1
            className={`page-title ${
              isVisible ? "title-flow-in" : "title-flow-out"
            }`}
          >
            {title}
          </h1>
          <div
            className={`page-icon ${
              isVisible ? "icon-flow-in" : "icon-flow-out"
            }`}
          >
            <img
              src={arrowIcon}
              alt="Scroll Down"
              onClick={() => {
                setIsVisible(false);
                onScrollToNext()
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
