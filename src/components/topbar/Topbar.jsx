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
          
            <div className="sectionItem">
              <a href="#contact" >
                  <span className="sectionText">Contact</span>
              </a>
            </div>

            <div className="sectionItem">
              <a href="#contact" >
              <span className="sectionText">Resume</span>
              </a>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Topbar;
