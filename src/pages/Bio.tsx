import profilePhoto from "../assets/profile_photo.jpg";
import gameFRTBTD from "../assets/from_red_to_blue.png";

export default function Bio( {} ) {
  return <>
    <h1>Who am I?</h1>
    <body id="description">
      <img src={profilePhoto} alt="Profile photo of Wesley Ng" className="doc-img"/>
      <p>
        Hello, I'm Wesley Ng, also referred to as Undalevein online. 
      </p>
      <p id="tangent">
        A bit of a side tangent but for both of my names, people struggled when trying to pronounce either of them, so let me explain.
      </p>
      <p id="tangent">
        For my first name, it's pronounced "whes-lee." 
        It does not have a "z" sound, and it does irritate me when people do that.
      </p>
      <p id="tangent">For my last name, it's pronounced "-ing," like how people pronounce any present participle verbs including "running," "swimming," or "sewing." But "ng" is also fine, and in fact it's the actual pronunciation. I didn't realize that until my dad told me that.
      </p>
      <p id="tangent">        
        Finally, my online name is pronounced "un-dahl'-ev'-in."
        People mispronounce the middle part, where they say "un-duh-lev-in."
      </p>
      <p>
        I am a programmer, specifcally towards game development. My journey as a game developer was quite strange to be honest. Going back to being tween little, I was making levels for the iOS game <a href="https://www.pixowl.com/games/thesandbox-evolution/"><i>The Sandbox Evolution</i></a>. It's a game similar to <a href="https://doodlegod.com/"><i>Doodle God</i></a>, and a sequel to <a href="https://apps.apple.com/us/app/the-sandbox-building-craft/id520777858"><i>The Sandbox</i></a>. I was looking at some published worlds, and I noticed that there are worlds that are tagged with a difficulty rating. These ratings are not what I cared about, though the extreme ratings with the purple skull icons were enticing. No, what I cared about was that these are verified levels. I didn't know how to make levels, but judging from the verified levels, they look polished. They are not thrown together with a giant brush and spammed multiple entities. And that started my journey into making games. I made many levels, mostly Avatar and Laser levels. These levels were created to be insanely difficult and not forgiving. Maybe perhaps my game design knowledge was lacking since I made levels that are ridiculously difficult with little fairness given to the player, but I like to publish levels on things that look cool, at least to me. 
      </p> 
      <p>
        Upon entering college is where I really started to get myself into making games, though again not very conventional. Traditionally, it would be a game engine like Unity or Unreal, but honestly I did not pick up a game engine just yet. 
      </p>
      <p>
        Freshman me began with <a href="https://www.pygame.org/docs/">Pygame</a>, an open-source library for Python that allows users to make games. If we compare this to a game engine, it is completely barebones. Either you need to know which libraries you need with Pygame to get the logic set, or worse, make every logic from scratch. For a game to run, you need to have code inside of an infinite loop. For our project, our goal is to make any software in Python, though it is recommended that you use Pygame. I paired up with a group and we decided to copy the well known daily puzzle game <a href="https://www.nytimes.com/games/wordle/index.html"><i>Wordle</i></a>. Though most of Pygame is solely scripting, I worked on the game logic portion. It was not too bad, as I have taken AP Computer Science in high school. All I need to do is to make sure the inputs show up on screen, add word validation, and prevent players from entering words that are not 5-letter words. However, the most difficult part is the edge cases with the logic. <i>Wordle</i> has an algorithm where if you guess a word with two similar letters but the answer only has one of those letters, you must color in a specific way. I think that took up an all-nighter to try to iron out that edge case, and yes, I am a problematic insommiac that I am strugglging to get out of.
      </p>
      <p>
        Sophomore of second semester was also still strange. I was in a class called <i>Intro to Interaction Animations</i>, where we use a program called <a href="https://www.adobe.com/products/animate.html">Adobe Animate</a>. Again, not a game engine, and like Pygame it is completely bare bones once again. Naturally, I did the most rational plan for my final project: making a 2D-platformer. To those who know how painful it is to make any form of physics engine, the scope of making a form of 2D-platformer, let alone having an unconventional launch system, is insane to complete within one-and-a-half months with the nearing of finals, let alone having to draw and animate each and every sprite in the project. 
      </p>
      <p>The project is called <a href="https://undalevein.github.io/FromRedToBlueToDarkness/"><i>From Red to Blue to Darkness</i></a>, which is a 2D-platformer where you play as Osma, a golem exploring the depths.</p>
      <img src={gameFRTBTD} alt='Home Menu for "From Red to Blue to Darkness."' className="doc-img"/>
      <p>
        As a side hobby, I enjoy learning a variety of programming langauges, whether they are practical or esoteric.
        Hence, in this website I do not have a preferred language, though I do have my thoughts on some existing languages:
      </p>
      <ul>
        <li>
          <a href="https://www.soliditylang.org/">Solidity</a> is a terrible programming language, literally. The absolute worst. Nevermind the fact that the language is based off of Ethereum, whatever your opinion is about cryptocurrency or blockchains, just look at the documentation and their examples they give. It's ridiculous to learn what is happenings!
        </li>
        <li>
          <a href="https://docs.godotengine.org/en/stable/tutorials/scripting/index.html">GDScript</a> is better than <a href="https://www.python.org/">Python</a> because of static typing option and readability. You can't really tell if you are declaring or rebinding a Python variable unless you are using type hints (which are completely useless as they are just fancy comments in disguise), so I see code that is garbled up in variables with no way of knowing which ones are global or local variables. I think the simplicity of Python is fine, but I just dislike how ugly it looks when it becomes terse.
        </li>
        <li>
          I am <a href="https://www.java.com/">Java</a>-pilled still, but I am exploring other languages like <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">C#</a>, especially while learning Unity and Autosplitting Scripting Language.
        </li>
        <li>
          <a href="https://go.dev/">Go</a> is a cool language, but what the heck is their time formatting? Huh? Why does it need to be formatted as <code>"03:04:05"</code> instead of <code>"HH:mm:ss"</code> for 12-hour clocks?
        </li>
      </ul>
    </body>
  </>;
}