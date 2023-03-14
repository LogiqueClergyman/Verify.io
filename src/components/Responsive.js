import { useEffect } from "react";
import NavMobile from "./NavMobile";
import HomeMobile from "./HomeMobile";
import FooterMobile from "./FooterMobile";

const Responsive = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-gray-300 w-[390px] h-[1024px] overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
      data-animate-on-scroll
    >
      <NavMobile />
      <HomeMobile />
      <FooterMobile />
    </div>
  );
};

export default Responsive;
