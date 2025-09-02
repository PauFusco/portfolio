<template>
  <div style="margin-bottom: 80px;">
    <h1>Hey!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Pau Fusco</strong>, a Videogame Design and Development graduate, now searching for a job.
        I want to make my passion get to gamers all around the world and let them enjoy great interactive experiences!
      </div>

      <div style="margin-top: 20px;">
        I've worked on some <router-link to="/game-projects">University Projects</router-link>, and some
        <router-link to="/other-projects">Game Jams</router-link> as well.
      </div>

      <div style="margin-top: 20px;">
        I'm currently <strong>looking for a job</strong>.
        You can reach me <router-link to="/contact">through here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/pfp.png" alt="Avatar of Pau" />
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