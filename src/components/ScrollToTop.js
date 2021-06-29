import React, { useEffect, useState } from "react";
import ScrollToTopIcon from "../image/Scroll_To_Top.png";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <img
            src={ScrollToTopIcon}
            alt="Go to top"
            title="Scroll To Top"
          />
        </div>
      )}
    </div>
  );
}
