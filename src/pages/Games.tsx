import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export function Games( {} ) {
  return <>
    <h2>Games I have made or collaborated in.</h2>
    <Link to="/games/rules-rules-rules" style={{textDecoration:"inherit", color:"inherit"}}>  
      <article className="creation-post">
        <h3>Rules, Rules, Rules</h3>
        <p>A card game for parties for friends and family! The rules are simple: slap the cards that are dictated by the rule cards that's constantly changing. Slap correctly, get rewards. Slap wrongly, get punished.</p>
        <p><b>Quick Info:</b></p>
        <ul>
          <li><b>Player Count: </b>2-8 players (recommended 4-6 players)</li>
          <li><b>Average Playtime: </b>20 minutes</li>
          <li><b>Genre(s): </b> Cards, Simple, Minimalistic, Slap</li>
        </ul>
      </article>
    </Link>
    <Link to="/games/sokoball" style={{textDecoration:"inherit", color:"inherit"}}>
      <article className="creation-post">
        <h3>Sokoball</h3>
        <p>It's Sokoban, but with a ball.</p>
        <p><b>Quick Info:</b></p>
        <ul>
          <li><b>Player Count: </b>1 player</li>
          <li><b>Average Playtime: </b>15 minutes</li>
          <li><b>Genre(s): </b> Sokoban, Puzzle</li>
        </ul>
      </article>
    </Link>
    <Link to="/games/eye-spy" style={{textDecoration:"inherit", color:"inherit"}}>
      <article className="creation-post">
        <h3>Eye Spy?</h3>
        <p>It's Sokoban, but with a ball.</p>
        <p><b>Quick Info:</b></p>
        <ul>
          <li><b>Player Count: </b>1 player</li>
          <li><b>Average Playtime: </b>20-30 minutes</li>
          <li><b>Genre(s): </b> Stealth, Spy, Silly</li>
        </ul>
      </article>
    </Link>
    <Link to="/games/from-red-to-blue-to-darkness" style={{textDecoration:"inherit", color:"inherit"}}>
      <article className="creation-post">
        <h3>From Red, to Blue, to Darkness</h3>
        <p>Guide Osma the golem to the depths of darkness.</p>
        <p><b>Quick Info:</b></p>
        <ul>
          <li><b>Player Count: </b>1 player</li>
          <li><b>Average Playtime: </b>20-30 minutes</li>
          <li><b>Genre(s): </b>2D platformer</li>
        </ul>
      </article>
    </Link>
    <Link to="/games/the-nutcase" style={{textDecoration:"inherit", color:"inherit"}}>
      <article className="creation-post">
        <h3>The Nutcase</h3>
        <p>You woke up in the hospital as the detective of a strange anomaly.</p>
        <p><b>Quick Info:</b></p>
        <ul>
          <li><b>Player Count: </b>1 player</li>
          <li><b>Average Playtime: </b>10-20 minutes</li>
          <li><b>Genre(s): </b>Horror</li>
        </ul>
      </article>
    </Link>
    <Link to="/games/tax-invasion" style={{textDecoration:"inherit", color:"inherit"}}>
      <article className="creation-post">
        <h3>Tax Invasion</h3>
        <p>Wait, we humans have to pay our superior alien race tax dollar money?</p>
        <p><b>Quick Info:</b></p>
        <ul>
          <li><b>Player Count: </b>1 player</li>
          <li><b>Average Playtime: </b>10 minutes</li>
          <li><b>Genre(s): </b>Arcade, 2D map shooter</li>
        </ul>
      </article>
    </Link>
  </> 
}

export function GameRouters( {} ) {
  return <>
    <Route path="games/rules-rules-rules" element={<RulesRulesRules/>}/>
    <Route path="games/sokoball" element={<Sokoball/>}/>
    <Route path="games/eye-spy" element={<EyeSpy/>}/>
    <Route path="games/from-red-to-blue-to-darkness" element={<FromRedToBlueToDarkness/>}/>
    <Route path="games/the-nutcase" element={<TheNutcase/>}/>
    <Route path="games/tax-invasion" element={<TaxInvasion/>}/>
  </>;
  
}

function RulesRulesRules( {} ) {
  return <>
    <h1>Rules, Rules, Rules</h1>
    <h2>A party game for obedient family members and friends.</h2>
    <main>
      <aside>
        <h3>Info</h3>
        <p>Player Count: 3-8 players</p>
        <p>Items: </p>
        <ul>
          <li>Slap Cards</li>
          <li>Rule Cards</li>
          <ul>
            <li>Positive (Green) Cards</li>
            <li>Negative (Red) Cards</li>
            <li>Forbidden (Black) Cards</li>
          </ul>
        </ul>
        <h3>Setup</h3>
        <p>Shuffle the decks of the Slap Cards, Positive, Negative, and Forbidden Cards. Separate the Slap Cards as equally as possible to all players who are playing.</p>
        <h3>How to play</h3>
        <p>Upon starting a brand new game, start by drawing a Forbidden Card and face it upwards for everyone to read. This drawn card should be facing up for the entire game.</p>
        <p>Each player playing will be responsible for their own stacks when revealing Slap Cards, where they will be revealing their cards onto.</p>
        <p>To start a new round, reveal 2 Positive Cards and 1 Negative Card and have them face up for everyone to read.</p>
        <p>After everyone has read the Rule Cards, all players take a Slap Card from their deck but do no reveal it. Hold the cards at the center such that everyone could slap. Countdown by saying "3... 2... 1... GO!" where upon shouting "GO!" all players reveal their cards facing up onto their stack. Once everyone revealed their cards, players can slap any of the cards that was revealed.</p>
        <p>If the first player slaps any of the cards, they should be rewarded/punished by referring to the Slap Rules table below. If there is a tie, whoever has their hand covering most of the card gets rewarded/punished.</p>
        <table>
          <caption>Slap Rules</caption>
          <tr>
            <th>Either Positive Cards Satisfied</th>
            <th>Either Negative/Forbidden Cards Satisfied</th>
            <th>Outcome</th>
          </tr>
          <tr>
            <td>Yes</td>
            <td>Yes</td>
            <td>Lose 2 Cards</td>
          </tr>
          <tr>
            <td>Yes</td>
            <td>No</td>
            <td>Win the Card you slapped, and discard the entire stack from the stack you slapped.</td>
          </tr>
          <tr>
            <td>No</td>
            <td>Yes</td>
            <td>Lose 2 Cards</td>
          </tr>
          <tr>
            <td>No</td>
            <td>No</td>
            <td>Lose 1 Card</td>
          </tr>
        </table>
        <p>Once everyone gets rewarded/punished or no one has slapped, continue revealing cards if your stack is not discarded. If all stacks have been discarded, this means that the round has ended. Discard both Positive Cards and the Negative Card and repeat the round, drawing 2 new Positive and 1 Negative Cards from the draw pile and repeating as before.</p>
        <h3>Win Condition</h3>
        <p>If someone has a total of 10 cards they have won, they win. If there's a tie, then proceed the game as normal until one of the tied players wins their next card. </p>
      </aside>
      <p><i>Rules, Rules, Rules</i> is a card game I made for Game Design class during my fall junior year of Loyola Marymount University. It was a project that must be worked on for the entire semester.</p>
      <p>It was the beginning of the new school year, and I was tasked to come up with 3 different game pitches... hmmmmm...</p>
      <p className="quote">"huh, what should I make, I know that gerrymandering is a f*****-up thing that exists in the U.S., and it would be cool to see it as a 1v1 strategy game. Letm me write that down..."</p>
      <ol><li>
        Gerry-Rigged is a two-player board game where you and your rival are respected senators with conflicting ideologies who want to rig the election in their favor. Persuade your voters, bar voters, and redraw district lines to ensure your party wins a majority in the state government of "Ractago."
      </li></ol>
      <p className="quote">Ok, one down... hmmmmm, maybe this idea about two warring rich homeowners trying to force the other to move out through sending insects... that could be super fun.</p>
      <ol start={2}><li>
        Class Divide is a two-player card game where two wealthy families living next door hate each other, and they assign you, the butlers, to sabotage each other’s mansions through the power of insect warfare!
      </li></ol>
      <p>But what is my last idea? I was struggling to come up with a board game idea that was fun and interesting. Perhaps instead I can make a video game, it was an option but the professor recommended that students should do a board game instead.</p>
      <p>There was a game in particular I was quite fond of at the time: <i><a href="https://keeptalkinggame.com/</i>">Keep Talking and Nobody Explodes</a></i> or KTANE. It is a 2 player party game that focuses on communication. One player takes on the role of the defuser, while the other reads the manual. The defuser is faced with a bomb ticking down, and they must communicate with the manual reader on how to defuse each module. I love this game, and during the summer it was the game I was playing with one of my middle school friends.</p>
      <p>But there was something that my mind is leaning towards. To defuse the bomb, there are criterias that the player must follow. The button module for example gives information on when the button is yellow, or says the word "DETONATE." In other words, <abbr title="Keep Talking and Nobody Explodes">KTANE</abbr>'s manual is like a book full of rules that the players must follow. It's the "do-this" or "don't do that" formula that is straight-forward, and I immediately fell in love with. What if rule following is the point of the game? In fact, what if we have a fast-paced game like <i><a href="https://bicyclecards.com/how-to-play/slapjack/">Slapjack</a></i>, which is a </p>
    </main>
  </>
}
// Rules, Rules, Rules
// Rules, Rules, Rules is a fast and simple party game that focuses on fast reaction times and careful rules following. The premise is simple: if a card’s rule has been satisfied, then slap it quickly before your friends slap it first!
// At the center of the table, two players must reveal the cards at the same time, preferably with a countdown from 3… 2… 1… GO! Once the card is revealed, the players must read the cards’ rules and decide whether to slap the card or not. If one of the cards is satisfied, the player must quickly slap the card before others can. If you slap the card and that card is satisfied, then you win the topmost card and the rest of the cards below it is put to a discard pile. However, if you slap the card and the card is not satisfied, then you lose a card and must throw that into the discard pile. Only the topmost cards on each pile must be followed, so disregard any rules below them. If no one slapped during that draw, then keep drawing. Having cards serves as points and at the end of the game, whoever has the most cards wins. 
// This game is fun for friends and family who enjoy yelling, screaming, and above all chaos. There is no better joy than the stress of following rules upon rules upon rules.  
// Potential Challenges:
// •	Clarity – The rules may not be visible for everyone to see, and English words alone may not easily be seen when looking at it at a disadvantageous angle.
// •	Variety, Vocabulary, and Scope of the Rules – People have different levels of vocabulary, and it will be unfair to them if they don’t know what the rule means. This does limit the scope of the variety of different rules. 


function Sokoball( {} ) {
  return <>
    <h1>Another Sokoban with a twist.</h1>
  </>
}

function EyeSpy( {} ) {
  return <>
    <h1>James Blind will now be coming to your house near you, just bear the yelling.</h1>
  </>
}

function FromRedToBlueToDarkness( {} ) {
  return <>
    <h1>Osma down the darkness lane.</h1>
  </>
}

function TheNutcase( {} ) {
  return <>
    <h1>Hi. My name is house. Do you know why Descartes used candle wax during his meditations?</h1>
  </>
}

function TaxInvasion( {} ) {
  return <>
    <h1>You have not paid your property taxes, humans.</h1>
  </>
}

