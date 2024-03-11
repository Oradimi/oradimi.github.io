<template>
<div class="works">
  <h2>{{ $t('gallery.animation') }}</h2>
  <ProjectItem detailed
  :name="$t('projects.d2025.name')"
  :category="$t('projects.d2025.cat')"
  :description="$t('projects.d2025.desc')"
  link="https://www.youtube.com/watch?v=9QyrhAM1LBw"
  image="MeinaAnimation.png"
  video="https://drive.google.com/file/d/15mFSMwAdr6wH0_rOHtdptn_yc8HPuAb-/preview"
  />

  <div class="image-collection">
    <ProjectItem
    image="modeling/Screenshot_01.png"/>
    <ProjectItem
    image="modeling/Screenshot_05.png"/>
  </div>

  <h2>{{ $t('gallery.art') }}</h2>
  <ProjectItem detailed
  :name="$t('projects.bd25h2023.name')"
  :category="$t('projects.bd25h2023.cat')"
  :description="$t('projects.bd25h2023.desc')"
  link="https://25hbd.com/participants/2023/oradimi/"
  image="MeinaMeetsFanay.png"
  />

  <div class="image-collection">
    <ProjectItem
    :name="$t('projects_s.train1.name')"
    :description="$t('projects_s.train1.desc')"
    link="https://www.reddit.com/r/MoeMorphism/comments/13348zw/mi09_and_mi2n_the_two_trains_of_the_rer_a_line/"
    image="drawing/MI09xMI2N_final.png"/>
    <ProjectItem
    :name="$t('projects_s.train2.name')"
    :description="$t('projects_s.train2.desc')"
    link="https://twitter.com/Oradimi/status/1681222303760232449?s=20"
    image="drawing/Skoda_15Ev_final.png"/>
    <ProjectItem
    :name="$t('projects_s.meina_water.name')"
    :description="$t('projects_s.meina_water.desc')"
    image="drawing/26_remove.png"/>
  </div>
  
  <h2>{{ $t('gallery.modeling') }}</h2>
  <ProjectItem detailed
  :name="$t('projects.vrca.name')"
  :category="$t('projects.vrca.cat')"
  :description="$t('projects.vrca.desc')"
  image="VRChatAvatars.png"
  />

  <div class="image-collection">
    <ProjectItem
    :description="$t('projects_s.meina_model.desc')"
    image="models/MeinaRef150.png"/>
    <ProjectItem
    :description="$t('projects_s.fanay_model.desc')"
    image="models/FanayRef100.png"/>
    <ProjectItem
    :description="$t('projects_s.elizabeth_model.desc')"
    image="models/ElizabethRef100.png"/>
    <ProjectItem
    :description="$t('projects_s.meina_paper.desc')"
    image="models/MeinaPaper.jpg"/>
  </div>

  <h2>{{ $t('gallery.videos') }}</h2>
  <ProjectItem detailed
  :name="$t('projects.kcit.name')"
  :category="$t('projects.kcit.cat')"
  :description="$t('projects.kcit.desc')"
  link="https://www.youtube.com/watch?v=XjG6kRgm9qc"
  image="KanColleVideo.png"
  />

  <div class="image-collection">
    <ProjectItem
    :name="$t('projects_s.kcit_android.name')"
    :description="$t('projects_s.kcit_android.desc')"
    link="https://www.youtube.com/watch?v=sfBpe54OOr4"
    image="video/KanColleVideoAndroid.png"/>
    <ProjectItem
    :name="$t('projects_s.mia.name')"
    :description="$t('projects_s.mia.desc')"
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
  }
}
</script>

<style scoped>
.works {
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