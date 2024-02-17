<template>
<div class="projects">
  <ProjectItem detailed
  name="Meina Teaches Typing"
  category="January 2024 – Game Jam (Godot 4, Blender)"
  description="A project made alone in 2 days for <b>Gamejam 64</b>.
  Hit the key prompt in rhythm to earn points!
  Assets made with <b>Blender</b>."
  link="https://oradimi.itch.io/meina-teaches-typing"
  image="MeinaTeachesTyping.png"
  video="https://drive.google.com/file/d/14D-sG95ThUUpwGBXa6WSwzXcuKDBXxMt/preview"
  />

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

  <ProjectItem detailed
  name="Rubik4D"
  category="December 2023 – Game Prototype (Unity)"
  description="A fully functional 4D Rubik's Cube made in a 3-people team.
  An actual 4D implementation has been used under the hood.
  Build showcased made in 3 weeks using <b>Unity</b>.
  Still in development until May 2024.
  Featured in the <a href=https://hypercubing.xyz/software/ target='_blank'>Hypercubing website software list</a>."
  link="https://github.com/melokye/IMAC2_Rubik4D"
  image="Rubik4D.png"
  video="https://drive.google.com/file/d/1KwEuUV5adGrau9I4TCSRlsQe0PCD0kDG/preview"
  />

  <ProjectItem detailed
  name="25hBD 2023 Edition"
  category="October 2023 – Comic (ClipStudioPaint)"
  description="A half-yearly event where you must draw a 12-page comic with a theme and a constraint in 24 hours.
  Theme: “It’s all a question of scale!”
  Constraint: “Make an optical illusion appear.”
  Here is a <a href=https://drive.google.com/file/d/1gM5X8ZDr3V_CYE-5xi9YAm0n6QS1R2gS/view target='_blank'>link to the english version</a>."
  link="https://25hbd.com/participants/2023/oradimi/"
  image="MeinaMeetsFanay.png"
  />

  <ProjectItem detailed
  name="Easter Panic"
  category="May 2023 – Game Jam (Godot 4, Photoshop)"
  description="A project made alone in 3 days for <b>Ludum Dare 53</b>.
  Drag the eggs to the right passersby to earn points!
  Assets made with <b>Photoshop</b>."
  link="https://ldjam.com/events/ludum-dare/53/easter-panic"
  image="EasterPanic.png"
  video="https://drive.google.com/file/d/1Na1ul4uJNIKUGjzzfVRfAkxLafO1i4uO/preview"
  />

  <ProjectItem detailed
  name="VRChat Avatars"
  category="Since February 2022 – Modeling, Rigging, Texturing (Blender, Unity)"
  description=
  "<b>Modeling</b> from scratch of 3D characters usable within VRChat or any purpose.
  They have facial expression blendshapes, physics, and many options.
  Left: Meina v1.4.2 (2023/08/22)
  Right: Elizabeth v1.0.0 (2024/02/09) (design from <a href=https://www.pixiv.net/en/artworks/113663868 target='_blank'>stoictroglodyte</a>)"
  link="https://github.com/Oradimi/KanColle-English-Patch-KCCP"
  image="VRChatAvatars.png"
  />

  <ProjectItem detailed
  name="KanColle English Patch"
  category="Since May 2020 – Translation (Photoshop, Premiere Pro, Java)"
  description=
  "<b>Translation</b> of a Japanese online game into English.
  Modification or recreation of assets with <b>Photoshop.</b>
  Implementation in a third party <b>Java</b> Android app.
  Making of video tutorials with <b>Premiere Pro</b>.
  Management of a related Discord.
  Making of scripts to make installation easier.
  <a href=https://imgur.com/a/oAB9f7x target='_blank'>More screenshots</a>"
  link="https://github.com/Oradimi/KanColle-English-Patch-KCCP"
  image="KanColleEnglishPatch.png"
  />
</div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem.vue'
export default {
  components: {
    ProjectItem
  }
}
</script>

<style scoped>

</style>