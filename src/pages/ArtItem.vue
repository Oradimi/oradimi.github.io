<template>
  <div class="works">
    {{ $t("art_notice") }}
    <div class="image-collection">
      <div v-for="year in sortedYears" :key="year">
        <h2 class="year-header">{{ year }}</h2>
        <div class="year-images">
          <ProjectItem v-for="(image, index) in groupedImages[year]" :key="index" :image="image.path" :description="image.description" :sortedYears="sortedYears" :groupedImages="groupedImages" :currentIndex="index" :currentYear="year" />
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
    const configurations = import.meta.glob("../assets/projects/art/**/*.png", { eager: true });

    const imagePaths = Object.keys(configurations).map((fullPath) => fullPath.replace("../assets/projects/", ""));

    const imagePathsHash = Object.values(configurations).map((module) => module.default);

    imagePaths.reverse();
    imagePathsHash.reverse();

    this.groupedImages = imagePaths.reduce((acc, imagePath, index) => {
      const hashedPath = imagePathsHash[index];
      const year = imagePath.replace("art/", "").substring(0, 4);

      const fileName = imagePath.replace("art/", "");
      const [name, extension] = fileName.split(".");
      const parts = name.split("_");
      const description = parts.length > 1 ? parts.slice(1).join(" ").replace(/_/g, " ") : "";

      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push({
        path: imagePath,
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
