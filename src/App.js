import React, { useRef } from "react";
import "./App.css";
import Page from "./Page";
import firstImage from "../src/Images/first_image.png";
import secondImage from "../src/Images/second_image.png";
import thirdImage from "../src/Images/third_image.png";
import fourthImage from "../src/Images/fourth.jpg";

const pagesData = [
  {
    image: firstImage,
    subtitle: "Luxury Suits",
    title: "Andmenlife Website",
  },
  {
    image: secondImage,
    subtitle: "Watches",
    title: "Bretiling Website",
  },
  {
    image: thirdImage,
    subtitle: "Photography",
    title: "Andreas Portfolio",
  },
  {
    image: fourthImage,
    subtitle: "Luxury Car",
    title: "Mercedes Website",
  },
];

function App() {
  const pageRefs = useRef(pagesData.map(() => React.createRef()));

  const handleScrollToNext = (index) => {
    if (pageRefs.current[index + 1]) {
      pageRefs.current[index + 1].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div style={{ padding: "0px" }}>
      {pagesData.map((page, index) => (
        <div key={index} ref={pageRefs.current[index]}>
          <Page
            title={page.title}
            subtitle={page.subtitle}
            image={page.image}
            onScrollToNext={() => handleScrollToNext(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
