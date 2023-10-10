import "./App.css";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="container-fluid pt-5 pt-lg-0 p-0 overflow-hidden">
      <NavBar />
      <div className="container-fluid mt-5 p-0">
        <div className="row pt-5 pt-lg-0 mb-5">
          <div
            className="col-lg-4 d-flex flex-column justify-content-center align-items-center p-0 mb-5"
            id="col-ux"
          >
            <div className="containter-fluid w-50 w-lg-100 mb-5">
              <img
                src="src/assets/logo.png"
                alt=""
                className="w-100"
                id="cover-logo"
              />
            </div>
            <div className="d-flex flex-row mt-5">
              <div className="mx-2">
                <a href="https://www.instagram.com/_noniponi_/">
                  <img
                    src="./src/assets/insta-purple.svg"
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="mx-2">
                <a href="https://twitter.com/_noniponi_">
                  <img
                    src="./src/assets/twitter-purple.svg"
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="mx-2">
                <a href="https://www.webtoons.com/en/creator/noniponi">
                  <img
                    src="./src/assets/webtoon-purple.svg"
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <img
              src="/src/assets/ochomesketch.png"
              alt=""
              className="img-fluid"
              id="oc-home"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <h1 className="ms-0 text-start">Latest Posts</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-12 pb-3">
              <img
                src="/src/assets/post-ex.png"
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-4 col-12 pb-3">
              <img
                src="/src/assets/post-ex.png"
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-4 col-12 pb-3">
              <img
                src="/src/assets/post-ex.png"
                alt=""
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
