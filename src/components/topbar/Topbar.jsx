import "./topbar.scss";
import { MailOutlined, PhoneOutlined } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro">
            <div className="logoContainer">
              <img src="assets/logo.png" />
            </div>
          </a>
          <div className="itemContainer">
            <MailOutlined className="iconMail" />
            <span className="itemText">meliketekin2243@gmail.com</span>
          </div>
          <div className="itemContainer">
            <PhoneOutlined className="iconPhone" />
            <span className="itemText">+90 507 568 24 72</span>
          </div>
        </div>

        <div className="right">
          <div className="sectionItemContact">
          <a className="contactLink" href="#contact">
              <span className="contact">Contact</span>
            </a>
          </div>

          <div className="sectionItemResume">
            <a href="https://drive.google.com/file/d/1VgwyGknUwFaH7pSO2AGn_UIdFm2Zeg15/view?usp=sharing">
              <input className="resume" type="button" value="RESUME" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
