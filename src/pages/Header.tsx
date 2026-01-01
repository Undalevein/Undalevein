import githubWhiteLogo from "../assets/github-mark-white.svg";
import youtubeLogo from "../assets/youtube-mark.png";
import { Outlet, Link } from "react-router-dom";

export default function Header( {} ) {
  return (
    <>
      <header>
        <h1>Undalevein's Corner</h1>
          <nav>
            <Link to="/">
              <button className="navigation">Home</button>
            </Link>
            <Link to="/bio">
              <button className="navigation">Bio</button>
            </Link>
            <Link to="/blog">
              <button className="navigation">Blog</button>
            </Link>
            <Link to="/games">
              <button className="navigation">Games</button>
            </Link>
            <Link to="/photography">
              <button className="navigation">Photography</button>
            </Link>
            <Link to="/speedrunning">
              <button className="navigation">Speedrunning</button>
            </Link>
            <Link to="/coding">
              <button className="navigation">Coding</button>
            </Link>
            <a href="https://github.com/Undalevein" target="_blank">
              <button className="navigation">
                <img src={githubWhiteLogo} className="socials" alt="GitHub" />
              </button>
            </a>
            <a href="https://www.youtube.com/@undalevein4749" target="_blank">
            <button className="navigation">
              <img src={youtubeLogo} className="socials" alt="YouTube" />
            </button>
          </a>
        </nav>
      </header>
      <Outlet />
    </>
  )
};