<template>
  <div class="works">
    {{ $t("fanart_notice") }}
    <div class="image-collection">
      <div v-for="year in sortedYears" :key="year">
        <h2 class="year-header">{{ year }}</h2>
        <div class="year-images">
          <ProjectItem v-for="(image, index) in groupedImages[year]" :key="index" :image="image.thumbPath" :description="image.description" :sortedYears="sortedYears" :groupedImages="groupedImages" :currentIndex="index" :currentYear="year" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem.vue";

export default {
  components: {
    ProjectItem,
  },
  data() {
    return {
      groupedImages: {},
    };
  },
  computed: {
    sortedYears() {
      return Object.keys(this.groupedImages).sort((a, b) => b - a);
    },
  },
  created() {
    const images = import.meta.glob("../assets/projects/fanart/**/*.png", { eager: true });
    const thumbs = import.meta.glob("../assets/projects_thumbnails/fanart/**/*.png", { eager: true });

    const imagePaths = Object.keys(images).map((fullPath) => fullPath.replace("../assets/projects/", ""));
    const thumbPaths = Object.keys(thumbs).map((fullPath) => fullPath.replace("../assets/projects_thumbnails/", ""));
    const imagePathsHash = Object.values(images).map((module) => module.default);

    imagePaths.reverse();
    thumbPaths.reverse();
    imagePathsHash.reverse();

    this.groupedImages = imagePaths.reduce((acc, imagePath, index) => {
      const thumbPath = thumbPaths[index];
      const hashedPath = imagePathsHash[index];
      const year = 0;

      const fileName = imagePath.replace("fanart/", "");
      const [name, extension] = fileName.split(".");
      const parts = name.split("_");
      const description = parts.length > 1 ? parts.slice(1).join(" ").replace(/_/g, " ") : "";

      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push({
        path: imagePath,
        thumbPath: thumbPath,
        hashedPath: hashedPath,
        description: description,
      });
      return acc;
    }, {});
  },
};
</script>

<style scoped>
.works {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.year-header {
  font-size: 24px;
  margin: 20px 0;
}

.image-collection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.year-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: smaller;
}
</style>
