<template>
<div class="projects">
  <ProjectItem detailed
  :name="$t('projects.bp.name')"
  :category="$t('projects.bp.cat')"
  :description="$t('projects.bp.desc')"
  link="https://github.com/Oradimi/IMAC2-CS-Project"
  image="ProjectBoids.png"
  video="https://drive.google.com/file/d/1rWb4NC3zboGmcXPrLDD-SANsy-tdEjfH/preview"
  />

  <ProjectItem detailed
  :name="$t('projects.kg.name')"
  :category="$t('projects.kg.cat')"
  :description="$t('projects.kg.desc')"
  link="https://github.com/Oradimi/IMAC2-Vue-Project"
  image="KanColleGlossary.png"
  video="https://drive.google.com/file/d/1SxEFE63D5SjnZRBSxQz5rB4VibH31PaX/preview"
  />

  <ProjectItem detailed
  :name="$t('projects.mtt.name')"
  :category="$t('projects.mtt.cat')"
  :description="$t('projects.mtt.desc')"
  link="https://oradimi.itch.io/meina-teaches-typing"
  image="MeinaTeachesTyping.png"
  video="https://drive.google.com/file/d/14D-sG95ThUUpwGBXa6WSwzXcuKDBXxMt/preview"
  />

  <ProjectItem detailed
  :name="$t('projects.r4d.name')"
  :category="$t('projects.r4d.cat')"
  :description="$t('projects.r4d.desc')"
  link="https://github.com/melokye/IMAC2_Rubik4D"
  image="Rubik4D.png"
  video="https://www.youtube.com/embed/CQfCuZcSHPw?si=5pZchs6shNzMMtTQ"
  />

  <ProjectItem detailed
  :name="$t('projects.ep.name')"
  :category="$t('projects.ep.cat')"
  :description="$t('projects.ep.desc')"
  link="https://ldjam.com/events/ludum-dare/53/easter-panic"
  image="EasterPanic.png"
  video="https://drive.google.com/file/d/1Na1ul4uJNIKUGjzzfVRfAkxLafO1i4uO/preview"
  />

  <!-- <ProjectItem detailed
  :name="$t('projects.dv.name')"
  :category="$t('projects.dv.cat')"
  :description="$t('projects.dv.desc')"
  link="https://github.com/Oradimi/Delaunay-Voronoi"
  image="DelaunayVoronoi.png"
  video="https://drive.google.com/file/d/1-fG7dJp1upOypQNRBuLRhnhzmEFoPHaY/preview"
  /> -->

  <ProjectItem detailed
  :name="$t('projects.kcep.name')"
  :category="$t('projects.kcep.cat')"
  :description="$t('projects.kcep.desc')"
  link="https://github.com/Oradimi/KanColle-English-Patch-KCCP"
  image="KanColleEnglishPatch.png"
  />

  <router-link to="/gallery" class="more">{{ $t('gallery_see_more') }}</router-link>
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
.more {
  text-align: center;
}

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image-collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>