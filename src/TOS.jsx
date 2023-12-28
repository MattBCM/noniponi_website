const TOS = () => {
  return (
    <div className="container-fluid mt-2 bg-light min-vh-100 p-5 d-flex flex-column justify-content-center align-items-center">
      {
        // WHEN COMMISSIONS ARE CLOSED
        <div
          className="alert alert-info mt-lg-4 mt-5 pt-lg-4 pt-5"
          role="alert"
        >
          Commissions are <strong>CLOSED</strong> <br />
          Thank you for checking me out! Commissions will open in the future!
        </div>
      }
      {
        // WHEN COMMISSIONS ARE OPENED

        <div className="container-fluid w-100 tos-container pt-4">
          <h1 className="mt-4 pt-lg-4 pt-5">🌿Artistree Form🌿</h1>
          <p className="fs-5 mt-4">
            By reading this ToS you have promised to have read, looked over,
            acknowledged, and accepted all terms and conditions, information,
            and prices shown here.
          </p>
          <p>
            <strong style={{ textDecoration: "underline" }}>
              All prices are based on USD
            </strong>
          </p>
          <h2>The Menu</h2>
          <div className="table-responsive">
            <table className="table table-bordered w-75 m-auto">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Sketches</th>
                  <th>Dip Pen (Manga) Art</th>
                  <th>Rendered/Colored</th>
                  <th>Additional Characters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Head/Bust</th>
                  <td>$15</td>
                  <td>$45</td>
                  <td>$30</td>
                  <td>+$15 (each)</td>
                </tr>
                <tr>
                  <th>Half Body</th>
                  <td>$20</td>
                  <td>$60</td>
                  <td>$60</td>
                  <td>+$20 (each)</td>
                </tr>
                <tr>
                  <th>Full Body</th>
                  <td>$30</td>
                  <td>$75</td>
                  <td>$75</td>
                  <td>+$30 (each)</td>
                </tr>
                <tr>
                  <th>Chibi</th>
                  <td>$20</td>
                  <td>$35</td>
                  <td>$45</td>
                  <td>+$20 (each)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="w-75">
              <p className="fs-5 text-left">
                <strong>✒️Add on: </strong>
                <em>If you would like the lineart to be done with a dip pen</em>
                &nbsp;(anime/manga pen and ink): Due to preparation, use of
                materials, maintenance, and extra time the whole order would
                cost an <strong>additional $25</strong>. Sketches would be done
                in pencil for this type of order and the lineart would be
                scanned to edit digitally.&nbsp;
                <span style={{ textDecoration: "underline" }}>
                  *only applies to rendered/colored drawings*
                </span>
              </p>
              <p className="fs-5">
                🎨Colored sketches are an <strong>additional $10</strong>
              </p>
              <p className="fs-5">
                ⭐Small/simple <strong>backgrounds</strong> (such as floating
                pastries, stars, etc) are an <strong>additional $10</strong>
              </p>
              <p className="fs-5">
                🎊
                <strong>
                  Surprise Me (Skeb) Commissions are also available between $10
                  - $150
                </strong>
              </p>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered w-75 m-auto text-start">
              <thead>
                <tr>
                  <th className="bg-success-subtle">
                    I{" "}
                    <strong style={{ textDecoration: "underline" }}>
                      WILL
                    </strong>
                    &nbsp;Do
                  </th>
                  <th className="bg-danger-subtle">
                    I{" "}
                    <strong style={{ textDecoration: "underline" }}>
                      WILL NOT
                    </strong>{" "}
                    Do
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        ✅OCs (Original Characters)
                      </li>
                      <li className="list-group-item">✅Anime Girls/Boys</li>
                      <li className="list-group-item">✅Fanart</li>
                      <li className="list-group-item">
                        ✅Kemonomichi (Catgirl, etc)
                      </li>
                      <li className="list-group-item">✅Avatars</li>
                      <li className="list-group-item">✅Chibi</li>
                      <li className="list-group-item">✅Some Objects</li>
                      <li className="list-group-item">✅Simple backgrounds</li>
                      <li className="list-group-item">✅Small Cute Animals</li>
                    </ul>
                  </td>
                  <td>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        ❌NFSW, Gore, Violence
                      </li>
                      <li className="list-group-item">❌Mecha and Vehicles</li>
                      <li className="list-group-item">❌Real People</li>
                      <li className="list-group-item">
                        ❌Offensive media to parties
                      </li>
                      <li className="list-group-item">❌NFT/Crypto/AI Works</li>
                      <li className="list-group-item">❌Complex backgrounds</li>
                      <li className="list-group-item">❌Furries (yet ;D)</li>
                      <li className="list-group-item">❌Muscular Characters</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-danger fs-5">
            **I will immediately deny commissions for NFT/Crypto/AI Works**
          </p>
          <p className="text-danger fw-bold fs-5">
            **I do not offer my art for commercial or AI use**
          </p>
          <h2>COMMISSIONER AND ARTIST RIGHTS</h2>
          <p>
            Commissioners will be given a drawing that has a plain/colored
            background, a version that says “thank you” on it, and a
            transparency background (and a simple background if that was
            requested in the form).
          </p>
          <div className="container-fluid text-start w-75">
            <h5>
              AS THE <span style={{ textDecoration: "underline" }}>ARTIST</span>{" "}
              <span className="bg-success-subtle">I CAN…</span>
            </h5>
            <ul style={{ listStyleType: "none" }}>
              <li>✅Refuse your commission for any reason</li>
              <li>
                ✅Post your commission on my social media with my @ on the
                drawing
              </li>
              <li>✅Use your commission as a part of my portfolio</li>
            </ul>
            <h5>
              AS THE{" "}
              <span style={{ textDecoration: "underline" }}>COMMISSIONER</span>{" "}
              <span className="bg-success-subtle">YOU CAN…</span>
            </h5>
            <ul style={{ listStyleType: "none" }}>
              <li>
                ✅Use your commission for any{" "}
                <span style={{ textDecoration: "underline" }}>
                  NON-COMMERCIAL
                </span>{" "}
                reason as long as I am credited as the artist
              </li>
              <li>
                ✅Repost your commission on your social media as long as I am
                credited as the artist
              </li>
              <li>
                ✅Crop your commission as needed (such as for profile pictures)
              </li>
            </ul>
            <h5>
              AS THE{" "}
              <span style={{ textDecoration: "underline" }}>COMMISSIONER</span>{" "}
              <span className="bg-danger-subtle">YOU CANNOT…</span>
            </h5>
            <ul style={{ listStyleType: "none" }}>
              <li>
                ❌Use your commission{" "}
                <span style={{ textDecoration: "underline" }}>
                  COMMERCIALLY
                </span>
              </li>
              <li>
                ❌Repost your commission on your social media without crediting
                me as the artist
              </li>
              <li>
                ❌Make major edits to your commission (includes removing my
                signature)
              </li>
              <li>❌Request major edits after approval</li>
            </ul>
            <p>
              <strong>Additional Disclaimers</strong>
            </p>
            <ul>
              <li className="fw-bold">
                Once again,{" "}
                <span className="text-danger">
                  I will immediately deny commissions for NFT/Crypto/AI Works
                </span>
              </li>
              <li>
                If you would like to not be credited or tagged as the
                commissioner please let me know
              </li>
              <li>
                I allow up to 3 revisions in the sketching phase, once I color I
                will only fix minor mistakes like color (does not apply for
                surprise me/ skeb)
              </li>
            </ul>
          </div>
        </div>
      }
    </div>
  );
};

export default TOS;
