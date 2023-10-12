import "./App.css";
import { useState } from "react";

const HomePage = () => {
  const latestArts = [
    {
      src: "/src/assets/art-12.png",
    },
    {
      src: "/src/assets/art-13.png",
    },
    {
      src: "/src/assets/art-14.png",
    },
  ];

  const [currArt, setCurrentArt] = useState("");

  let latPosts = [];

  for (let i = 0; i < 3; i++) {
    latPosts.push(
      <div
        className="col-lg-4 col-12 pb-3"
        onClick={() => {
          setCurrentArt(latestArts[i].src);
        }}
        data-bs-toggle="modal"
        data-bs-target="#imgmodal"
        style={{ cursor: "pointer" }}
      >
        <div
          className="art-col "
          style={{ backgroundImage: `url(${latestArts[i].src})` }}
        ></div>
      </div>
    );
  }

  return (
    <div>
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
                <a href="https://www.instagram.com/_noniponi_/" target="_blank">
                  <img
                    src="./src/assets/insta-purple.svg"
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="mx-2">
                <a href="https://twitter.com/_noniponi_" target="_blank">
                  <img
                    src="./src/assets/twitter-purple.svg"
                    alt=""
                    width="100%"
                  />
                </a>
              </div>
              <div className="mx-2">
                <a
                  href="https://www.webtoons.com/en/creator/noniponi"
                  target="_blank"
                >
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
              src="/src/assets/oc-home.png"
              alt=""
              className="img-fluid"
              id="oc-home"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <h1 className="ms-0 text-start py-4 px-2">Latest Posts</h1>
        <div className="container-fluid">
          <div className="row">{latPosts}</div>
        </div>
      </div>
      <div className="modal fade w-100" id="imgmodal">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={currArt} className="img-fluid mh-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
