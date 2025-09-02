import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Alien Nemesis", "img/projects/alien-nemesis.png",
        `
    <div class="paragraph">
        The final project of the 3rd year of the degree. This game was done by a whole class of 23 students,
        each one with their roles and tasks.
        Divided into three departments: Programming, Art, and Design, we developed this arcade shooter
        inspired in the Alien franchise.
        <br/>
        For this project we also used a custom engine developed in the previous semester, so we worked
        on the engine while working also in the game, adapting it to our necessities.
        <br/>
        Check the team in the <a href="https://shadow-wizard-games.github.io/Alien-Nemesis-Website/index.html" target="blank">Project Website</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/FczGKS7WU1w" frameborder="0" allowfullscreen></iframe>
    </div>   

    <div class="paragraph">
        The features I worked on :
        <ul>
        <li>Engine Scene Management</li>
        <li>Engine Prefab System</li>
        <li>Player Abilities and Movement</li>
        <li>Bug and Crash Fixing</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Windows build and source code available in <a href="https://github.com/Shadow-Wizard-Games/TheOneEngine" target="_blank">GitHub</a>.
    </div>
    </div>

    `, "#23bd69", false, true),

    new ProjectData("project-3", "Jailed VR", "img/projects/jailedvr.png", `
    <div class="paragraph">
        <strong>Jailed VR</strong> is a VR Psychological Horror Puzzle Game, where players need to solve
        three puszzles to escape the house they are trapped in.
        <br/>
        This project was developed by five people: three programmers, one designer, and one 3D Artist,
        with the Meta Quest 2 VR headset in mind.
        <br/>
        This game takes focus in the interaction with in-game objects to tackle the three puzzles,
        while using the environment to add tension.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Gyj4yftFy-Q" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features I worked on:
        <ul>
        <li>Thought about the three puzzles and designed the base for them</li>
        <li>Implemented one of the three puzzles, one focused on using a radio by rotating its dial.</li>
        <li>Haptic feedback on the player's actions for a more immersive experience</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable on <a href="https://xgauss05.itch.io/jailed-vr" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/Ethanm-0371/Jailed-VR" target="_blank">GitHub</a>.
        </div>
    </div>

    <!-- <div class="paragraph center">
         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
         <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
     </div> -->
    `, "#383838"),

    new ProjectData("project-4", "Return: A JRPG Parody", "img/projects/return.png", `
    <div class="paragraph">
    <strong>Return</strong> is a small turn-based RPG in which you control a group of friends
    stranded in a new world, looking for a way to go back to their lives at home.
    <br/>
    It follows the common "isekai" trope of Japanese media, giving it a funny twist.
    <br/>
    This game was made by a group of 8 people with just SDL2, without any game engine.
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Q6oQ-PZFwFs" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features I worked on :
        <ul>
        <li>Music</li>
        <li>Sound Effects</li>
        <li>Sound Implementation</li>
        <li>Story design</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build and source code available on <a href="https://github.com/xGauss05/RPG-Game-Project" target="_blank">GitHub</a>.
        </div>
    </div>

    <!--<div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>-->
    `, "#9e642d"),

    new ProjectData("project-2", "2D Combat System Prototype", "img/projects/TFG.png", `
    <div class="paragraph">
        This is my <strong>End of Degree Project</strong>: the prototype of a 2D Combat System.
        This project also included the design of said Combat System.
        <br/>
        The target of this project was to mix the Combat Systems of Platform Fighting Games (like Super Smash Bros.)
        with Metroidvanias (such as Hollow Knight), offering a more mobile and agile combat experience.
        <br/>
        This was developed using Unity, and I created a custom "Input Manager" to have a more customizable
        and predictable system for input detection.
        <br/>
        The following video showcases the process of creation of the prototype.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/sfrP1aZKm2w" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Resource Management of enemies and player</li>
        <li>14 different attacks, 7 airborne and 7 grounded</li>
        <li>Pogo jump, Parries, and Chargeable attacks</li>
        <li>Camera Shake that depends on attack strength</li>
        <li>Custom Input System</li>
        <li>Attacks are Scriptable Objects: +flexibility & +iteration</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Windows build, source code, and project report all available on
        <a href="https://github.com/PauFusco/TFG2DCS" target="_blank">GitHub</a>.
    </div>
    </div>

    <!-- <div class="paragraph center">
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" /> -->
    </div>
    `, "#e48246", false, true),

    // add physics project
];