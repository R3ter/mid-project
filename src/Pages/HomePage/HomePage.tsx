import "./style.scss";
import HeroSection from "../../Components/HeroSection/HeroSection";
import OnScrollFade from "../../Components/OnScrollAnimations/OnScrollFade";
import AboutUsParagraph from "./AboutUs/AboutUsParagraph";
import BestTeachers from "./BestTeachers/BestTeachers";
import OnScrollSwipe from "../../Components/OnScrollAnimations/OnScrollSwipe";
import TopReviews from "./TopReviews/TopReviews";
// import "./style.scss";

interface IProps {}
export default ({}: IProps) => {
  return (
    <div className="homePage">
      <HeroSection />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <OnScrollFade>
            <AboutUsParagraph />
          </OnScrollFade>
          <h2>Top Teachers</h2>

          <OnScrollSwipe>
            <BestTeachers />
          </OnScrollSwipe>
          <OnScrollFade>
            <TopReviews />
          </OnScrollFade>
        </div>
      </div>
    </div>
  );
};
