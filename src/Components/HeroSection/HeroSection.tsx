import { Button } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import { isLogged, userInfo } from "../../functions/Account";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./style.scss";

interface IProps {}
export default ({}: IProps) => {
  const navigate = useNavigate();

  return (
    <Parallax pages={4}>
      <ParallaxLayer offset={0} factor={0} style={{ zIndex: -2 }} speed={0.5}>
        <div
          style={{
            zIndex: -1,
          }}
          className="HeroSection"
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} factor={0} style={{ zIndex: -1 }} speed={0.1}>
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundImage: "url(/public/1.png)",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer>
        <div
          style={{
            width: "100%",
            height: "10vh",
            position: "absolute",
            bottom: 0,
            backgroundImage: "url(/public/table.jpg)",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer>
        <div className="test"></div>
        <div
          style={{
            backgroundImage: "linear-gradient(black,white)",
            width: "100%",
            height: "100%",
          }}
        ></div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} sticky={{ start: 1 }}>
        <MyComponent />
        <NavBar />
      </ParallaxLayer>
    </Parallax>
    //     <div className="HeroSection">

    //   <div>
    //     <div>Welcome to Learn Online</div>
    //     <div>learn from the globe</div>
    //     {!userInfo().isTeacher && (
    //       <Button
    //         onClick={() => {
    //           if (!isLogged()) {
    //             navigate("/login");
    //           } else {
    //             navigate("/BeTeacherPage");
    //           }
    //         }}
    //         variant="outlined"
    //         color="success"
    //         style={{ margin: "30px", width: "200px", backgroundColor: "white" }}
    //       >
    //         Become a teacher
    //       </Button>
    //     )}
    //   </div>
    // </div>
  );
};
function MyComponent() {
  const [isElementVisible, setIsElementVisible] = useState(false);

  const handleScroll = () => {
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsElementVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  return <animated.div style={props}>Hello World</animated.div>;
}
