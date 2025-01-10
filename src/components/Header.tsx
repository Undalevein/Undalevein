import githubWhiteLogo from "../assets/github-mark-white.svg";
import youtubeLogo from "../assets/youtube-mark.png";
import "./Header.css";

export default function Header({ setPage }) {
  return (
    <>
      <header>Undalevein's Corner</header>
      <button onClick={() => setPage(1)}>Bio</button>
      <button onClick={() => setPage(2)}>Blog</button>
      <button onClick={() => setPage(3)}>Games</button>
      <button onClick={() => setPage(4)}>Photography</button>
      <button onClick={() => setPage(5)}>Speedrunning</button>
      <button onClick={() => setPage(6)}>Coding Projects</button>
      <a href="https://github.com/Undalevein" target="_blank">
        <img src={githubWhiteLogo} className="socials" alt="GitHub" />{" "}
      </a>
      <a href="https://www.youtube.com/@undalevein4749" target="_blank">
        <img src={youtubeLogo} className="socials" alt="YouTube" />{" "}
      </a>
    </>
  );
}
