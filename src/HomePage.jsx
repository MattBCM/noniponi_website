import "./App.css";
import ochome from "./assets/oc-home.png";
import logo from "./assets/logo.png";
import webtoonpurple from "./assets/webtoon-purple.svg";
import instapurple from "./assets/insta-purple.svg";
import twitterpurple from "./assets/twitter-purple.svg";

const HomePage = () => {
  return (
    <div>
      <div className="container-fluid d-block d-lg-none top-0 left-0 my-auto d-flex justify-content-center align-items-center min-vh-100 flex-column pt-5 mt-5">
        <img src={logo} alt="" className="w-50 pt-5" id="cover-logo" />
        <div>
          <div className="d-flex flex-row mt-2">
            <div className="mx-2">
              <a href="https://www.instagram.com/_noniponi_/" target="_blank">
                <img src={instapurple} alt="" width="100%" />
              </a>
            </div>
            <div className="mx-2">
              <a href="https://twitter.com/_noniponi_" target="_blank">
                <img src={twitterpurple} alt="" width="100%" />
              </a>
            </div>
            <div className="mx-2">
              <a
                href="https://www.webtoons.com/en/creator/noniponi"
                target="_blank"
              >
                <img src={webtoonpurple} alt="" width="100%" />
              </a>
            </div>
          </div>
        </div>
        <img src={ochome} alt="" className="img-fluid pt-3" />
      </div>
      <div className="container-fluid p-0 d-none d-lg-block">
        <div className="row pt-lg-0">
          <div
            className="col-lg-4 d-flex flex-column justify-content-center align-items-center p-0 min-vh-100 z-1"
            id="col-ux"
          >
            <div className="containter-fluid w-50 w-lg-100 mb-5">
              <img src={logo} alt="" className="w-100" id="cover-logo" />
            </div>
            <div className="d-flex flex-row mt-5">
              <div className="mx-2">
                <a href="https://www.instagram.com/_noniponi_/" target="_blank">
                  <img src={instapurple} alt="" width="100%" />
                </a>
              </div>
              <div className="mx-2">
                <a href="https://twitter.com/_noniponi_" target="_blank">
                  <img src={twitterpurple} alt="" width="100%" />
                </a>
              </div>
              <div className="mx-2">
                <a
                  href="https://www.webtoons.com/en/creator/noniponi"
                  target="_blank"
                >
                  <img src={webtoonpurple} alt="" width="100%" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="min-vh-100 position-relative d-flex justify-content-center align-items-center overflow-visible">
              <img
                src={ochome}
                alt=""
                className="position-absolute top-0 start-0 ochome"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
