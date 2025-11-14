import profilePhoto from "../assets/profile_photo.jpg";
import gameFRTBTD from "../assets/from_red_to_blue.png";
import gameSokoball from "../assets/sokoball.png";
import eyeSpy from "../assets/eyespy.png";
import taxInvasion from "../assets/taxInvasion.png";
import nutcase from "../assets/nutcase.png";

export default function Home( {} ) {
  return <>
    <h1>Welcome to my website!</h1>
    <h2>Games I have worked on</h2>
    <a href="https://undalevein.itch.io/eye-spy">
      <img src={eyeSpy} alt='Logo for "Eye Spy."' className="doc-img"/>
    </a>
    <a href="https://soko-ball.web.app/">
      <img src={gameSokoball} alt='Puzzle from the webapp "Sokoball"' className="doc-img"/>
    </a>
    <a href="https://undalevein.github.io/FromRedToBlueToDarkness/">
      <img src={gameFRTBTD} alt='Home Menu for "From Red to Blue to Darkness."' className="doc-img"/>
    </a>
    <a href="https://siegesg.itch.io/tax-invasion">
      <img src={taxInvasion} alt='Home Menu for "From Red to Blue to Darkness."' className="doc-img"/>
    </a>
    <a href="https://boastful-birdie.itch.io/game-jam-the-nut-case">
      <img src={nutcase} alt='Home Menu for "From Red to Blue to Darkness."' className="doc-img"/>
    </a>
  </>;
}
