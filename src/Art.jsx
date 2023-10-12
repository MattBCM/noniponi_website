import { useState } from "react";

const Art = () => {
  const allArts = [
    {
      src: "/src/assets/post-ex.png",
    },
    {
      src: "/src/assets/oc-home.png",
    },
    {
      src: "/src/assets/ochomesketch.png",
    },
    {
      src: "/src/assets/logo.png",
    },
    {
      src: "/src/assets/post-ex.png",
    },
  ];

  const dipArts = [
    {
      src: "/src/assets/post-ex.png",
    },
    {
      src: "/src/assets/oc-home.png",
    },
    {
      src: "/src/assets/ochomesketch.png",
    },
  ];

  const [currArt, setCurrentArt] = useState("");

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid p-0 mt-2 bg-light mh-100">
        <h1 className="py-5">My Art</h1>
        <div className="container-fluid">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
            {allArts.map((art) => {
              return (
                <div
                  className="col pb-3"
                  onClick={() => {
                    setCurrentArt(art.src);
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#imgmodal"
                >
                  <div
                    className="art-col "
                    style={{ backgroundImage: `url(${art.src})` }}
                  ></div>
                </div>
              );
            })}
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

      {/* 
      DIP ART SECTION
      */}

      <div className="container-fluid p-0 bg-light mh-100">
        <h1 className="py-5">Dip Pen Art</h1>
        <div className="container-fluid">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
            {dipArts.map((art) => {
              return (
                <div
                  className="col pb-3"
                  onClick={() => {
                    setCurrentArt(art.src);
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#imgmodal"
                >
                  <div
                    className="art-col "
                    style={{ backgroundImage: `url(${art.src})` }}
                  ></div>
                </div>
              );
            })}
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
    </div>
  );
};

export default Art;
