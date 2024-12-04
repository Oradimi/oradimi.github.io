<template>
  <div class="works">
    {{ $t("comics_notice") }}
    <div class="image-collection">
      <div v-for="year in sortedYears" :key="year">
        <template v-if="locale == year.substring(0, 2)">
          <h2 class="year-header">{{ year }}</h2>
          <div class="year-images">
            <ProjectItem v-for="(image, index) in groupedImages[year]" :key="index" :image="image.path" :sortedYears="sortedYears" :groupedImages="groupedImages" :currentIndex="index" :currentYear="year" />
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
    const configurations = import.meta.glob("../assets/projects/comics/**/*.png", { eager: true });

    const imagePaths = Object.keys(configurations).map((fullPath) => fullPath.replace("../assets/projects/", ""));

    this.groupedImages = imagePaths.reduce((acc, imagePath) => {
      const number = imagePath.replace("comics/", "").substring(0, 5);

      if (!acc[number]) {
        acc[number] = [];
      }
      acc[number].push({
        path: imagePath,
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
