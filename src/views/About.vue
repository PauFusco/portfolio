<template>
  <div style="margin-bottom: 80px;">
    <h1>Hey!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Pau Fusco</strong>, a Videogame Design and Development graduate interested in Gameplay Programming.
        I want to make my passion get to gamers all around the world and let them enjoy great interactive experiences!
      </div>

      <div style="margin-top: 20px;">
        I've worked on <router-link to="/game-projects">University Projects</router-link>, and
        <router-link to="/other-projects">Game Jams</router-link> alike.
      </div>

      <div style="margin-top: 20px;">
        You can reach me <router-link to="/contact">through here</router-link>.
        <br />
        Check my resume <router-link to="/resume">here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/pfp.png" alt="Profile Picture" />
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 20px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: start;
    padding: 5px;
    padding-left: 50px;
  }
}
</style>