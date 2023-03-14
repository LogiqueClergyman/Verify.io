import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import {useMediaQuery} from "react-responsive"

import Desktop from "./components/Desktop";
import Responsive from "./components/Responsive"
import { useEffect } from "react";

function App() {
  const isDektopView = useMediaQuery({minWidth: 700});
  const isMobileView = useMediaQuery({maxWidth: 700});
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    // <p>Device Test</p>
    // (isDektopView && <LandingSection/>)
    // (isMobileView && <HomeMobile/>)
    <div>
      <Desktop />
    </div>
  );
}
export default App;
