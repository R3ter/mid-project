import "./style.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
interface IProps {}
export default ({}: IProps) => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="#">
            <i>
              <FacebookIcon />
            </i>
          </a>
          <a href="#">
            <i>
              <TwitterIcon />
            </i>
          </a>
          <a href="#">
            <i>
              <YouTubeIcon />
            </i>
          </a>
          <a href="#">
            <i>
              <InstagramIcon />
            </i>
          </a>
        </div>

        <div className="row">
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div className="row">Copyright © 2023 Waleed - All rights reserved</div>
      </div>
    </footer>
  );
};
