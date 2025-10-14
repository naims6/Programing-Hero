import { useEffect } from "react";

const useScrollAnimation = (className = "animation-bottom") => {
  console.log(className);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            console.log("nothing");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className]);
};

export default useScrollAnimation;
