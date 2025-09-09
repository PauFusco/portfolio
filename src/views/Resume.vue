<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Pau Fusco</strong>, a Videogame Design & Development graduate at CITM (2025).
      <br />
      Gained hands-on experience as an IT Assistant at Serveis Clínics, improving technical and problem-solving skills.
      Developed and published academic and personal projects on Itch.io and GitHub, with a solid base in design and
      programming.
      <br />
      Native in Catalan and Spanish, fluent in English, and basic in Japanese and German.
      <br />
      Passionate about video games and music, and motivated to grow within the game development industry.
      <br />
      <br />
      I am looking for a job to put into practice what I learned in my degree and prove my skills, so if you have any
      opportunity feel free to
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />
      Besides Videogame Development, I am passionate about cooking, music, hardware, and my cute cat.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/CV-PauFusco-En.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i>
          Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/CV-PauFusco.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i>
          Descargar en PDF 🇪🇸</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Pau" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>IT Assistant - Serveis Clínics</h3>
      <h4>Barcelona, 2023</h4>
      <div>
        The main task I performed was to take old devices, analyze their components and see which ones
        could be used to make new ones that performed better, extending their useful life.
        <br />
        I also was in charge of helping my colleages with any techical problem they encounter, from checking
        their laptops for any issue to migrating their data to their new devices.
      </div>
      <div class="tech-stack">Hardware, Device Recycling, Communication, Teamwork, Problem-Solving</div>

      <h2>Skills</h2>
      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C++" />
        <SkillRate name="C#" />
        <SkillRate name="MySQL" />
        <SkillRate name="C" />
        <SkillRate name="Python" />
      </div>

      <div class="skill-set">
        <h3>Game Development</h3>
        <SkillRate name="Unity" />
        <SkillRate name="SDL2" />
        <SkillRate name="Raylib" />
        <SkillRate name="Unreal Engine" />
      </div>

      <div class="skill-set">
        <h3>Tools & Frameworks</h3>
        <SkillRate name="Visual Studio" />
        <SkillRate name="GIT" />
        <SkillRate name="Scrum" />
        <SkillRate name="Trello" />
        <SkillRate name="NeoVim" />
        <SkillRate name="Vuforia AR SDK" />
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>CITM UPC [2021 - 2025]</h3>
      <h4>Videogame Design and Development Degree</h4>
      <div>
        Degree focused on Videogame Development, I worked with classmates to
        deliver enjoyable games to learn in the process.
      </div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Cambridge Certified C1</div>

      <h3>German</h3>
      <div>Four years in High School</div>

      <h3>Japanese</h3>
      <div>A bit of Duolingo here and there</div>

      <h3>Catalan</h3>
      <div>My Mother Tongue</div>

      <h3>Spanish</h3>
      <div>My other Mother Tongue</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video Games</h3>
        <div>
          Some of my favourites: Signalis, Breath of the Wild, Risk of Rain 2, and Katana Zero.
          <br />
          I love playing them, watching them, talking about them, and making them :D
          <br />
          If you see my 1600 hours in Warframe, it is not true. Steam is lying, I swear.
        </div>

        <h3>I 🧡 Music</h3>
        <div>
          I enjoy listening to music, and I play the Saxophone and Piano. I also play in a band ^-^
          <br />
          I truly feel blessed to live at the same time as the Risk of Rain 2 soundtrack.
        </div>

        <h3>I 💛 Manga & Anime</h3>
        <div>
          I grew up watching Dragon Ball, Dr. Slump, and Ranma½; now I spend my Sunday afternoons
          waiting for my weekly Kagurabachi chapter.
        </div>

        <h3>I 💚 My Cat</h3>
        <div class="tech-stack">It is so cute I wanna die!</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}

h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding-top: 30px;
}

h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>