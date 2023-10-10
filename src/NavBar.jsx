const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid d-flex justify-content-center-lg flex-column flex-lg-row">
        <div className="container collapse navbar-collapse" id="navbarToggler1">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                My Art
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Commissions TOS
              </a>
            </li>
          </ul>
        </div>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="src/assets/logo.png" alt="" width="100" />
          </a>
        </div>
        <div className="container">
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/_noniponi_/"
                  className="nav-link"
                  target="_blank"
                >
                  <img src="/src/assets/insta.svg" alt="" width="30" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://twitter.com/_noniponi_"
                  className="nav-link"
                  target="_blank"
                >
                  <img src="/src/assets/twitter.svg" alt="" width="30" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.webtoons.com/en/creator/noniponi"
                  className="nav-link"
                  target="_blank"
                >
                  <img src="/src/assets/webtoon.svg" alt="" width="30" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="navbar-toggler mt-3 me-3 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navcollapse"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse container-fluid d-lg-none" id="navcollapse">
          <ul className="navbar-nav pt-3">
            <li className="nav-item">
              <a href="" className="nav-link">
                My Art
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Commissions TOS
              </a>
            </li>
            <li className="d-flex flex-row justify-content-center pt-3">
              <a
                href="https://www.instagram.com/_noniponi_/"
                className="nav-link px-3"
                target="_blank"
              >
                <img src="/src/assets/insta.svg" alt="" width="30" />
              </a>
              <a
                href="https://twitter.com/_noniponi_"
                className="nav-link px-3"
                target="_blank"
              >
                <img src="/src/assets/twitter.svg" alt="" width="30" />
              </a>
              <a
                href="https://www.webtoons.com/en/creator/noniponi"
                className="nav-link px-3"
                target="_blank"
              >
                <img src="/src/assets/webtoon.svg" alt="" width="30" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
