<template>
<div class="works">
  <h2>Animation</h2>
  <ProjectItem detailed
  name="Dualitimac 2025"
  category="December 2023 – Animation (Blender)"
  description="A collaborative animation for a <b>Blender</b> class project.
  Each student had to make a 4-seconds animation with some constraints.
  My own contribution is the third to appear in the video!"
  link="https://www.youtube.com/watch?v=9QyrhAM1LBw"
  image="MeinaAnimation.png"
  video="https://drive.google.com/file/d/15mFSMwAdr6wH0_rOHtdptn_yc8HPuAb-/preview"
  />

  <div class="image-collection">
    <div v-for="image in modeling.keys()" :key="image.id">
      <ProjectItem :image="'modeling/' + image.slice(2)"/>
    </div>
  </div>

  <h2>Art</h2>
  <ProjectItem detailed
  name="25hBD 2023 Edition"
  category="October 2023 – Comic (ClipStudioPaint)"
  description="A half-yearly event where you must draw a 12-page comic with a theme and a constraint in 24 hours.
  Theme: “It’s all a question of scale!”
  Constraint: “Make an optical illusion appear.”
  Here is a <a href='https://drive.google.com/file/d/1gM5X8ZDr3V_CYE-5xi9YAm0n6QS1R2gS/view' target='_blank'>link to the english version</a>."
  link="https://25hbd.com/participants/2023/oradimi/"
  image="MeinaMeetsFanay.png"
  />

  <div class="image-collection">
    <ProjectItem
    name="MI09xMI2N"
    description="First time I finished a digital drawing.
    It did well on Reddit."
    link="https://www.reddit.com/r/MoeMorphism/comments/13348zw/mi09_and_mi2n_the_two_trains_of_the_rer_a_line/"
    image="drawing/MI09xMI2N_final.png"/>
    <ProjectItem
    name="Skoda 15Ev"
    description="A commission I got
    after the other one did well."
    link="https://twitter.com/Oradimi/status/1681222303760232449?s=20"
    image="drawing/Skoda_15Ev_final.png"/>
    <ProjectItem
    name="Meina in water"
    description="My proudest little drawing so far."
    image="drawing/26_remove.png"/>
  </div>
  
  <h2>3D Modeling</h2>
  <ProjectItem detailed
  name="VRChat Avatars"
  category="Since February 2022 – Modeling, Rigging, Texturing (Blender, Unity)"
  description=
  "<b>Modeling</b> from scratch of 3D characters usable within VRChat or any purpose.
  They have facial expression blendshapes, physics, and many options."
  link="https://github.com/Oradimi/KanColle-English-Patch-KCCP"
  image="VRChatAvatars.png"
  />

  <div class="image-collection">
    <ProjectItem
    description="Meina v1.4.2 (2023/08/22)"
    image="models/MeinaRef.png"/>
    <ProjectItem
    description="Elizabeth v1.0.0 (2024/02/09)
    (design from <a href='https://www.pixiv.net/en/artworks/113663868' target='_blank'>stoictroglodyte</a>)"
    image="models/ElizabethRef.png"/>
    <ProjectItem
    description="Paper Meina
    (inspired by <a href='https://twitter.com/hima1chan_/status/1699043514519376167?s=20' target='_blank'>@hima1chan_</a>)"
    image="models/MeinaPaper.jpg"/>
  </div>

  <h2>Videos</h2>
  <ProjectItem detailed
  name="KanColle Installation Tutorial"
  category="February 2022 – Video Editing (Premiere Pro)"
  description=
  "Complete video tutorial to install the game with
  my English Patch, and all the recommended tools.
  It has received over one thousand likes."
  link="https://www.youtube.com/watch?v=XjG6kRgm9qc"
  image="KanColleVideo.png"
  />

  <div class="image-collection">
    <ProjectItem
    name="For Android"
    description="A video made later
    with a slightly higher quality."
    link="https://www.youtube.com/watch?v=sfBpe54OOr4"
    image="video/KanColleVideoAndroid.png"/>
    <ProjectItem
    name="Made in Abyss"
    description="Short presentation of an anime
    I like (video in french)."
    link="https://www.youtube.com/shorts/qXUt-MQfGDg"
    image="video/MadeInAbyss.png"/>
  </div>
</div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
export default {
  components: {
    ProjectItem
  },
  data() {
    return {
      modeling: [],
      drawing: []
    };
  },
  created() {
    this.modeling = require.context(
      '@/assets/projects/modeling',
      true,
      /^.*\.png$/
    ),
    this.drawing = require.context(
      '@/assets/projects/drawing',
      true,
      /^.*\.png$/
    )
  }
}
</script>

<style scoped>
.works {
  display: block;
  align-items: center;
  justify-content: center;
}

.image-collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
</style>