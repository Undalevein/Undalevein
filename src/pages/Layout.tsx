import githubWhiteLogo from "../assets/github-mark-white.svg";
import youtubeLogo from "../assets/youtube-mark.png";
import { Outlet, Link } from "react-router-dom";

export default function Layout( {} ) {
  return (
    <>
      <h1>Undalevein's Corner</h1>
      <nav id="navigation">
        <Link to="/" className="headerlink">
          <button>Home</button>
        </Link>
        <Link to="/bio" className="headerlink">
          <button>Bio</button>
        </Link>
        <Link to="/blog" className="headerlink">
          <button>Blog</button>
        </Link>
        <Link to="/games" className="headerlink">
          <button>Games</button>
        </Link>
        <Link to="/photography" className="headerlink">
          <button>Photography</button>
        </Link>
        <Link to="/speedrunning" className="headerlink">
          <button>Speedrunning</button>
        </Link>
        <Link to="/coding" className="headerlink">
          <button>Coding</button>
        </Link>
        <a href="https://github.com/Undalevein" target="_blank">
          <button>
            <img src={githubWhiteLogo} className="socials" alt="GitHub" />
          </button>
        </a>
        <a href="https://www.youtube.com/@undalevein4749" target="_blank">
          <button>
            <img src={youtubeLogo} className="socials" alt="YouTube" />
          </button>
        </a>
      </nav>
      <Outlet />
    </>
  )
};