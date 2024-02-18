<template>
<div class="projects">
  <ProjectItem detailed
  name="Meina Teaches Typing"
  category="January 2024 – Game Jam (Godot 4, Blender)"
  description="A project made alone in 2 days for <b>Gamejam 64</b>.
  Hit the key prompt in rhythm to earn points!
  We had to include a mise en abyme within the game.
  Assets made with <b>Blender</b>."
  link="https://oradimi.itch.io/meina-teaches-typing"
  image="MeinaTeachesTyping.png"
  video="https://drive.google.com/file/d/14D-sG95ThUUpwGBXa6WSwzXcuKDBXxMt/preview"
  />

  <ProjectItem detailed
  name="Rubik4D"
  category="December 2023 – Game Prototype (Unity)"
  description="A fully functional 4D Rubik's Cube made in a 3-people team.
  An actual 4D implementation has been used under the hood.
  Build showcased made in 3 weeks using <b>Unity</b>.
  We were all equally involved in the development.
  Still in development until May 2024.
  Featured in the <a href=https://hypercubing.xyz/software/ target='_blank'>Hypercubing website software list</a>."
  link="https://github.com/melokye/IMAC2_Rubik4D"
  image="Rubik4D.png"
  video="https://drive.google.com/file/d/1KwEuUV5adGrau9I4TCSRlsQe0PCD0kDG/preview"
  />

  <ProjectItem detailed
  name="Easter Panic"
  category="May 2023 – Game Jam (Godot 4, Photoshop)"
  description="For my first game jam alone. Made in 3 days for <b>Ludum Dare 53</b>.
  Drag the eggs to the right passersby to earn points!
  Assets made with <b>Photoshop</b>."
  link="https://ldjam.com/events/ludum-dare/53/easter-panic"
  image="EasterPanic.png"
  video="https://drive.google.com/file/d/1Na1ul4uJNIKUGjzzfVRfAkxLafO1i4uO/preview"
  />

  <ProjectItem detailed
  name="Delaunay Voronoi"
  category="May 2023 – Demo (C++, SDL2)"
  description="A <b>C++</b> school project made alone.
  Clicking on the screen creates points and links them
  in a special way showcased here."
  link="https://github.com/Oradimi/Delaunay-Voronoi"
  image="DelaunayVoronoi.png"
  video="https://drive.google.com/file/d/1-fG7dJp1upOypQNRBuLRhnhzmEFoPHaY/preview"
  />

  <ProjectItem detailed
  name="KanColle English Patch"
  category="Since May 2020 – Translation (Photoshop, Premiere Pro, Java)"
  description=
  "<b>Translation</b> of a Japanese online game into English.
  Modification or recreation of assets with <b>Photoshop.</b>
  Implementation in a <a href='https://github.com/antest1/GotoBrowser' target='_blank'> third party <b>Java</b> Android app</a>.
  Making of video tutorials with <b>Premiere Pro</b>.
  Management of a related Discord.
  Making of scripts to make installation easier.
  <a href='https://imgur.com/a/oAB9f7x' target='_blank'>More screenshots</a>"
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
.projects {
  display: block;
  align-items: center;
  justify-content: center;
}

.image-collection {
  display: flex;
  flex-wrap: wrap;
}
</style>