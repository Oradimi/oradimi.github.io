<template>
<div class="works">
  <div v-for="image in images.keys()" :key="image.id">
    <ProjectItem :image="'dump/' + image.slice(2)" 
    :index="index"/>
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
      images: []
    };
  },
  created() {
    this.images = require.context(
      '@/assets/projects/dump',
      true,
      /^.*\.png$/
    )
  }
}
</script>

<style scoped>
.works {
  display: block;
}

.works > * {
  justify-items: center;
}

@media (min-width: 400px) {
  .works {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>