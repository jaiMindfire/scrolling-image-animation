import React, { useRef } from "react";
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

const App = () => {
  const pageRefs = useRef(pagesData.map(() => React.createRef()));

  const smoothScrollTo = (targetY, duration) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const currentY = startY + distance * progress;
      window.scrollTo(0, currentY);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScrollToNext = (index) => {
    if (pageRefs.current[index + 1]) {
      const targetY = pageRefs.current[index + 1].current.offsetTop;
      const duration = 600;
      smoothScrollTo(targetY, duration);
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
};

export default App;
