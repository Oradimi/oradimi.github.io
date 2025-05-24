<template>
  <div class="works">
    <div class="comics-notice" v-html="$t('comics_notice')"></div>
    <div class="image-collection">
      <div v-for="year in sortedYears" :key="year">
        <template v-if="locale == year.substring(0, 2)">
          <h2 class="year-header">{{ year }}</h2>
          <div class="year-images">
            <ProjectItem
              v-for="(image, index) in groupedImages[year]"
              :key="index"
              :image="image.thumbPath"
              :sortedYears="sortedYears"
              :groupedImages="groupedImages"
              :currentIndex="index"
              :currentYear="year"
            />
          </div>
        </template>
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
      locale: this.$i18n.locale,
    };
  },
  computed: {
    sortedYears() {
      return Object.keys(this.groupedImages).sort((a, b) => b - a);
    },
  },
  watch: {
    "$i18n.locale": {
      handler(newLocale) {
        this.locale = newLocale;
        if (newLocale == "ja") {
          this.locale = "en";
        }
      },
      immediate: true,
    },
  },
  created() {
    const images = import.meta.glob("../assets/projects/comics/**/*.png", { eager: true });
    const thumbs = import.meta.glob("../assets/projects_thumbnails/comics/**/*.png", { eager: true });

    const imagePaths = Object.keys(images).map((fullPath) => fullPath.replace("../assets/projects/", ""));
    const thumbPaths = Object.keys(thumbs).map((fullPath) => fullPath.replace("../assets/projects_thumbnails/", ""));
    const imagePathsHash = Object.values(images).map((module) => module.default);

    this.groupedImages = imagePaths.reduce((acc, imagePath, index) => {
      const thumbPath = thumbPaths[index];
      const hashedPath = imagePathsHash[index];
      const number = imagePath.replace("comics/", "").substring(0, 5);

      if (!acc[number]) {
        acc[number] = [];
      }
      acc[number].push({
        path: imagePath,
        thumbPath: thumbPath,
        hashedPath: hashedPath,
      });
      return acc;
    }, {});
  },
};
</script>

<style scoped>
.comics-notice {
  font-size: smaller;
  white-space: pre-line;
}

::v-deep(.comics-notice b) {
  color: var(--color-link);
}

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
