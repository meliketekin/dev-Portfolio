import "./topbar.scss";

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
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  );
};

export default Topbar;
