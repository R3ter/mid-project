import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from "react-scroll-parallax";

import "./style.scss";
interface IProps {}
export default () => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          { image: "/1.jpg", speed: -50 },

          {
            image: "/books.png",
            speed: 10,
            style: { backgroundSize: "contain", backgroundPosition: "bottom" },
          },
        ]}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          className="HeroSection"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "100px",
          }}
        >
          <h1>BookMyClass:</h1>
          <h2>Your One-Stop Destination for Booking Classes</h2>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
};
