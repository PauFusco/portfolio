import ProjectData from '@/data/ProjectData.ts'

export default [
  new ProjectData("wai-ggj", "Who Am I?", "img/projects/whoami-title.png", `
    <div class="paragraph">
      Discover what makes you <strong>you</strong>. Going through life can be easier when showing a different face to other,
      letting them see only what they would like, what they expect from you. But, for how long can you keep that mask up?
      And what is left when it falls apart?
      <br/>
      The entry to the GGJ 2026 Game Jam BCN@UPC 26, an introspective 3D platformer made by 5 people in 48 hours.
      <br/>
      Done in Godot, with the theme of the Game Jam being "mask".
    </div>

    <div class="paragraph">
    <div class="notice">
        Browser build available in <a href="https://jeserak.itch.io/who-am-i" target="_blank">itch.io</a>.
    </div>
    </div>

    <div class="paragraph">
      Main features I worked on :
      <ul>
      <li>Player Movement</li>
      <li>Progression</li>
      <li>Game Feel</li>
      </ul>
    </div>
    
    <div class="paragraph center">
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvNDI0OTMwNy8yNTM0OTY1NC5wbmc=/347x500/uAlqSX.png" alt="Who Am I Screenshot 1" />
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvNDI0OTMwNy8yNTM0OTY1My5wbmc=/347x500/qcSPvY.png" alt="Who Am I Screenshot 2" />
    </div>

    <div class="paragraph">
    <h3>Player Movement</h3>
      When tackling the development of the movement, the design of the code quickly evolved to a Finite State Machine. This design pattern let me
      tightly control the flow of the behaviour of the player, defining what made them move or jump, and the transitions between states.
      <br/>
      The model of the state machine was taken from my End of Degree project, where each state is defined separately using a base <strong>state</strong> class, and
      each state later tells the <strong>state machine</strong> to which state they transition and when they do it. This also had to be adapted to the Godot environment,
      since this editor does not let us put multiple scripts in a single <strong>Node</strong>.
      <br/>
      The result is the player Node having a <strong>State Machine</strong> child Node, that controls the flow of its <strong>State</strong> children,
      better seen in the following image.
     
      <div class="paragraph center">
      <img class="photo" src="img/projects/whoami-player_hierarchy.png" alt="player hierarchy" />
      </div>

      This results in very simple code when looked individually, since this is compartimented in different scripts. Initially there were not enough states
      to consider developing a state machine, but as the hours progressed, the player script kept increasing in size and complexity. Finite State Machines solve
      clarity and responsability of code, trading for ease of understanding because of the need of looking into multiple scripts to understand the full picture.

      <div class="paragraph center">
      <img class="photo" src="img/projects/whoami-state_machine.png" alt="player state machine" />
      </div>

      As a small detail, you can also see that in the hierarchy screenshot, the camera is a child of the <strong>head</strong> Node instead of being directly put
      in the player. This is due to having the head control the pitch of the camera, and the body control the yaw of the player altogether.
      This was preemptive in the case there was time to change the model to show the current equipped mask, giving a more realistic look when looking around.
      
      <div class="paragraph center">
      <img class="photo" src="img/projects/whoami-yawrot.png" alt="player rotation" />
      <img class="photo" src="img/projects/whoami-pitchrot.png" alt="head rotation" />
      </div>

    </div>
    `, "#c1a506", false, false),

  new ProjectData("pc-gmtk", "Primal Cycle", "img/projects/primalcycle.png", `
    <div class="paragraph">
      <strong>Advance</strong> through rooms, <strong>defeat</strong> the boss, <strong>break</strong> the cycle. A rogue-lite 2-stick arcade shooter:
      face enemies to become strong enough to defeat the final boss: the mighty Hippopotamus.
      <br/>
      The entry to the GMTK 2025 game jam made by Friendly Servers, a team of 7 people who just graduated of their Game Design and Development degree.
      <br/>
      Done in Unity in four days, we went from the base theme of the game jam, "cycle", to the final game.
    </div>

    <div class="paragraph">
    <div class="notice">
        Browser and Windows builds available in <a href="https://softdrawss.itch.io/primalcycle" target="_blank">itch.io</a>.
    </div>
    </div>

    <div class="paragraph">
      Main features I worked on :
      <ul>
      <li>Player Movement</li>
      <li>The weapon and its projectiles</li>
      <li>Player stats how they are buffed</li>
      <li>Enemy Spawns through a credit system</li>
      <li>Gunplay feedback</li>
      </ul>
    </div>
    
    <div class="paragraph center">
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMzc2NjYzOS8yMjU0MzE5MC5wbmc=/original/nwM%2BDr.png" alt="Primal Cycle Screenshot 1" />
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMzc2NjYzOS8yMjU0MzI1MS5wbmc=/original/Iqdol2.png" alt="Primal Cycle Screenshot 2" />
    </div>

    <div class="paragraph">
    <h3>Enemy Spawn System</h3>
      This game's <strong>Enemy Spawn System</strong> is inspired by the Risk of Rain 2 Director System, which is also a rogue-like game with dynamic enemy spawns.
      <br />
      This system gives rooms a set amount of credits, that together with a preset cost for each enemy (that can depend on the level of threat, for example),
      lets stages dinamically spawn enemies. The chance of spawning a specific enemy is also random, set by a chance, making the system highly customizable.
      <br />
      As the game progresses, rooms increase the available credits, increasing the amount of enemies that spawn. Since enemies have different spawn chances,
      rooms spend credits randomly until they can't spend more.
      
      <div class="paragraph center">
      <img class="photo" src="img/projects/enemySpawnerRecurseSnippet.png" alt="enemy spawner snippet" />
      </div>

      This is the code for the recursive spawner function, which with a given number of credits, spawns an enemy. If there are not enough credits to spawn
      said enemy, the spawner tries to spawn a cheaper one. If the current one is the dasher (the cheapest), it stops.
      <br />
      One thing I would fix for this function is the obfuscation of this last point, spawning a cheaper enemy. In this snippet this fact is "hardcoded", 
      since the switch moves to another preset case without comparing the costs. This could lead to unwanted behaviour if the costs of enemies are modified.
    </div>
    `, "#c14b06", false, true),

  new ProjectData("ittof-gcgj", "In the Tracks of Fate", "img/projects/inthetracksoffate.png", `
    <div class="paragraph">
      <strong>Interact with the other passangers of this train day after day... or is this day repeating?</strong>
      <br/>
      Ask until you are satisfied, uncover the misteries of the train and its passangers, and also about yourself.
      <br/>
      A point&click adventure that focuses on character interaction and relationship building through dialog and observation.
      <br/>
      The entry of the 8a Gran CITM Game Jam of Little Bat Productions, a group of 5 people in their last year of
      Game Design and Development, made with Unity.
      <br/>
      This game won the "Premi F5 / Dones Tech" award, which focused on accessibility and minority representation.
    </div>
    
    <div class="paragraph">
    <div class="notice">
      Windows build available in <a href="https://arawnecho.itch.io/in-the-tracks-of-fate" target="_blank">itch.io</a>.
    </div>
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/szdzXoK7Ll0" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
      Main features :
      <ul>
      <li>Player Movement</li>
      <li>Interactions, including items and doors</li>
      <li>Builded Map and its Colliders</li>
      <li>Original Soundtrack</li>
      <li>Unused Inventory System</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMzI4NTQyOC8xOTYxNDM5MS5wbmc=/original/WQtDAX.png" alt="In the Tracks of Fate Screenshot 1" />
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMzI4NTQyOC8xOTYxNDQwMS5wbmc=/original/26Woa0.png" alt="In the Tracks of Fate Screenshot 2" />
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMzI4NTQyOC8xOTYxNDQzMi5wbmc=/original/sg8TZv.png" alt="In the Tracks of Fate Screenshot 3" />
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMzI4NTQyOC8xOTY2Mzg5OS5wbmc=/original/TJHBhc.png" alt="In the Tracks of Fate Screenshot 4" />
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMzI4NTQyOC8xOTY2Mzk0MC5wbmc=/original/bCsrHh.png" alt="In the Tracks of Fate Screenshot 5" />
    </div>
    `, "#5621e9", false, true),

  new ProjectData("md-gcgj", "Morpheus' Dream", "img/projects/morpheusdream.png", `
    <div class="paragraph">
      <strong>You wake up, do your chores, go to sleep, wake up, do your ch... wait, is that pizza floating?</strong>
      <br/>
      A short mystery walking sim in which you spend your day doing your chores to go to sleep, and then wake up.
      Your apartment becomes more and more distorted as your pet fish, Morpheus, observes diligently.
      <br/>
      The entry to the 7a Gran CITM Game Jam made by Los Juanes, a group of 3 people.
      <br/>
      Done with Unity in half a week, we took the main theme of the jam, "dreams and nightmares", and created this game.
    </div>

    <div class="paragraph">
    <div class="notice">
      Windows build available in <a href="https://softdrawss.itch.io/morpheus-dream" target="_blank">itch.io</a>.
    </div>
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtube.com/embed/rwBT7pJFt-0" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
      Main features :
      <ul>
      <li>Mission System</li>
      <li>Iteractable Elements</li>
      <li>Color Aberration Shaders</li>
      </ul>
    </div>

    <div class="paragraph center">
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMjUwNjQxNy8xNDg5MjY5OC5wbmc=/original/xWjKug.png" alt="Morpheus' Dream Screenshot 1" />
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMjUwNjQxNy8xNDg5MjY2NS5wbmc=/original/Dp2tnw.png" alt="Morpheus' Dream Screenshot 2" />
      <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvMjUwNjQxNy8xNDg5MjgwMy5wbmc=/original/aabr%2FF.png" alt="Morpheus' Dream Screenshot 3" />
    </div>
    `, "#a58c6c"),

  new ProjectData("nttd-gmtk", "No Time to Di(c)e", "img/projects/notimetodice.png", `
    <div class="paragraph">
      <strong>Fight through the casino, seek revenge against the deck of cards, who have wronged you.</strong>
      <br/>
      The dice lived in peace in the casino with the cards, until one day, in an unfortunate turn of events, 
      they are separated. In that moment, our protagonist decides to take justice into their own hands.
      <br/>
      In this 2-stick arcade shooter you incarnate a dice, using the power of chance to empower themselves and defeat the cards.
      <br/>
      An entry to the GMTK 2022 Game Jam, made by a group of 12 first-year Game Design and Development students, using SDL2 and C++.
      </div>

      <div class="paragraph">
        <div class="notice">
          Windows build available in <a href="https://xgauss05.itch.io/no-time-to-dice" target="_blank">itch.io</a>.
        </div>
      </div>

    <div class="paragraph">
      Main features :
      <ul>
      <li>Menu Music</li>
      <li>All Sound Effects</li>
      <li>Sound Implementation</li>
      </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="https://img.itch.zone/aW1hZ2UvMTYyMjY1OS85NTc0NDUwLmpwZw==/original/rO2oRF.jpg" alt="No Time to Di(c)e Screenshot 1" />
        <img class="phone-screenshot" src="https://img.itch.zone/aW1hZ2UvMTYyMjY1OS85NTc0NDU0LmpwZw==/original/OlOJpO.jpg" alt="No Time to Di(c)e Screenshot 2" />
        <img class="phone-screenshot" src="https://img.itch.zone/aW1hZ2UvMTYyMjY1OS85NTc0NDYxLmpwZw==/original/TAAIud.jpg" alt="No Time to Di(c)e Screenshot 3" />
        <img class="phone-screenshot" src="https://img.itch.zone/aW1hZ2UvMTYyMjY1OS85NTc0NDcxLmpwZw==/original/%2FC%2Fyen.jpg" alt="No Time to Di(c)e Screenshot 4" />
    </div>
    `, "#16551e"),
];