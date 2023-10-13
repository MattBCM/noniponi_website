import { useState } from "react";
import ochome from "./assets/oc-home.png";
import Art2 from "./assets/art-2.png";
import Art3 from "./assets/art-3.png";
import Art4 from "./assets/art-4.png";
import Art5 from "./assets/art-5.png";
import Art6 from "./assets/art-6.jpg";
import Art7 from "./assets/art-7.jpg";
import Art8 from "./assets/art-8.png";
import Art9 from "./assets/art-9.png";
import Art10 from "./assets/art-10.png";
import Art11 from "./assets/art-11.png";
import Art12 from "./assets/art-12.png";
import Art13 from "./assets/art-13.png";
import Art14 from "./assets/art-14.png";
import DP1 from "./assets/dp-1.png";
import DP2 from "./assets/dp-2.png";
import DP3 from "./assets/dp-3.png";
import DP4 from "./assets/dp-4.png";
import DP5 from "./assets/dp-5.png";
import DP6 from "./assets/dp-6.png";

const Art = () => {
  const allArts = [
    {
      src: ochome,
    },
    {
      src: Art2,
    },
    {
      src: Art3,
    },
    {
      src: Art4,
    },
    {
      src: Art5,
    },
    {
      src: Art6,
    },
    {
      src: Art7,
    },
    {
      src: Art8,
    },
    {
      src: Art9,
    },
    {
      src: Art10,
    },
    {
      src: Art11,
    },
    {
      src: Art12,
    },
    {
      src: Art13,
    },
    {
      src: Art14,
    },
  ];

  const dipArts = [
    {
      src: DP1,
    },
    {
      src: DP2,
    },
    {
      src: DP3,
    },
    {
      src: DP4,
    },
    {
      src: DP5,
    },
    {
      src: DP6,
    },
  ];

  const [currArt, setCurrentArt] = useState("");

  return (
    <div className="container-fluid p-0 pt-5">
      <div className="container-fluid p-0 mt-2 bg-light mh-100 pt-4">
        <h1 className="pt-5 mt-lg-0 mt-5">My Art</h1>
        <p className="pb-5 fs-5 pt-2">A small sample of my work</p>
        <div className="container-fluid pt-3">
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
