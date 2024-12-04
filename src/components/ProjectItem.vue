<template>
  <div :class="{ project: detailed, 'small-project': !detailed }">
    <div v-if="detailed" class="content">
      <div class="head">
        <h2 class="name">
          <a :href="link" target="_blank"
            >{{ name }}
            <svg v-if="link" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
        </h2>
        <p>{{ formattedDate }}</p>
        <p class="category">
          <em>· {{ category }}</em>
        </p>
      </div>
      <div class="details">
        <p class="description" v-html="formattedDescription"></p>
      </div>
    </div>
    <div v-else-if="typeof description !== 'undefined'">
      <h2 v-show="typeof name !== 'undefined'" class="name-small">
        <a :href="link" target="_blank"
          >{{ name }}
          <svg v-if="link" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </h2>
      <p class="description" v-html="formattedDescription"></p>
    </div>
    <div class="image-canvas" :class="{ detailed: detailed }" @click="zoomInHandler">
      <video v-if="isWebM" :src="imageUrl" loop autoplay muted :class="{ zoomable: !no_zoom }"></video>
      <img v-else :src="imageUrl" :class="{ zoomable: !no_zoom }" />
    </div>
  </div>
  <div v-if="showFullImage" class="full-image" @click="zoomInHandler">
    <button v-if="previousImageExists" @click.stop="navigateToImage(previousImage())" class="nav-button prev">←</button>
    <div v-if="typeof video !== 'undefined'" class="iframe-container">
      <img v-if="showThumbnail" :src="fullImageUrl" />
      <button v-if="showThumbnail" @click.stop="playVideo" class="play-button">{{ $t("show_video") }}</button>
      <iframe v-if="!showThumbnail" :src="video" width="1280" height="720" frameborder="0" :title="name" allow="autoplay" allowfullscreen></iframe>
    </div>
    <template v-else>
      <video v-if="isWebM" :src="fullImageUrl" loop autoplay muted :class="{ zoomable: !no_zoom }"></video>
      <img v-else :src="fullImageUrl" :class="{ zoomable: !no_zoom }" />
    </template>
    <button v-if="nextImageExists" @click.stop="navigateToImage(nextImage())" class="nav-button next">→</button>
  </div>
</template>

<script>
const images = import.meta.glob("../assets/projects/**/*.{png,jpg,jpeg,svg,webm}");

export default {
  name: "ProjectItem",
  props: {
    detailed: { type: Boolean, required: false },
    name: { type: String, required: false },
    category: { type: String, required: false },
    description: { type: String, required: false },
    date: { type: String, required: false },
    link: { type: String, required: false },
    image: { type: String, required: true },
    video: { type: String, required: false },
    no_zoom: { type: Boolean, required: false },
    index: { type: Number, required: false },
    sortedYears: { type: Array, required: true },
    groupedImages: { type: Object, required: true },
    currentIndex: { type: Number, required: true },
    currentYear: { type: String, required: true },
  },
  methods: {
    zoomInHandler() {
      if (this.no_zoom) return;
      this.showFullImage = !this.showFullImage;
      if (!this.showFullImage) {
        this.showThumbnail = true;
        this.fullImageUrl = this.imageUrl;
        this.fullImageIndex = this.currentIndex;
        this.fullImageYearIndex = this.currentYear;
      }
    },
    playVideo() {
      this.showThumbnail = false;
    },
    parseDate(dateString) {
      if (!dateString) return "";

      if (dateString === "X") return this.$t("today");

      const [year, month] = dateString.split(".").map(Number);
      if (!year || !month) return "";

      const date = new Date(year, month - 1); // month - 1 because months are 0-based
      const formattedDate = date.toLocaleDateString(this.$i18n.locale, {
        year: "numeric",
        month: "long",
      });

      return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    },
    navigateToImage(imagePath) {
      if (imagePath) {
        this.fullImageUrl = `/src/assets/projects/${imagePath}`;
      }
    },
    previousImage() {
      const yearIndex = this.sortedYears.indexOf(this.fullImageYearIndex);
      if (this.fullImageIndex > 0) {
        this.fullImageIndex += -1;
        return this.groupedImages[this.fullImageYearIndex][this.fullImageIndex].path;
      } else if (yearIndex > 0) {
        this.fullImageYearIndex = this.sortedYears[yearIndex - 1];
        this.fullImageIndex = this.groupedImages[this.fullImageYearIndex].length - 1;
        return this.groupedImages[this.fullImageYearIndex][this.fullImageIndex].path;
      }
      return this.imageUrl;
    },
    nextImage() {
      const yearIndex = this.sortedYears.indexOf(this.fullImageYearIndex);
      if (this.fullImageIndex < this.groupedImages[this.fullImageYearIndex].length - 1) {
        this.fullImageIndex += 1;
        return this.groupedImages[this.fullImageYearIndex][this.fullImageIndex].path;
      } else if (yearIndex < this.sortedYears.length - 1) {
        this.fullImageYearIndex = this.sortedYears[yearIndex + 1];
        this.fullImageIndex = 0;
        return this.groupedImages[this.fullImageYearIndex][this.fullImageIndex].path;
      }
      return this.imageUrl;
    },
    handleKeyDown(event) {
      if (this.showFullImage) {
        if (event.key === "ArrowLeft") {
          const previous = this.previousImageExists;
          if (previous) this.navigateToImage(this.previousImage());
        } else if (event.key === "ArrowRight") {
          const next = this.nextImageExists;
          if (next) this.navigateToImage(this.nextImage());
        }
      }
    },
  },
  computed: {
    isWebM() {
      return this.image.endsWith(".webm");
    },
    formattedDescription() {
      return this.description ? this.description.replace(/\n/g, "<br>") : "";
    },
    formattedDate() {
      if (!this.date) return "";

      const dates = this.date.split("-").map((dateString) => this.parseDate(dateString));

      if (dates.length === 1) {
        // Single date (e.g., "May 2024")
        return dates[0];
      }
      if (dates.length === 2) {
        // Date range (e.g., "May 2024 to December 2024")
        return `${dates[0]} ~ ${dates[1]}`;
      }

      return "";
    },
    previousImageExists() {
      const yearIndex = this.sortedYears.indexOf(this.fullImageYearIndex);
      return this.fullImageIndex > 0 || yearIndex > 0;
    },
    nextImageExists() {
      const yearIndex = this.sortedYears.indexOf(this.fullImageYearIndex);
      return this.fullImageIndex < this.groupedImages[this.fullImageYearIndex].length - 1 || yearIndex < this.sortedYears.length - 1;
    },
  },
  data() {
    return {
      imageUrl: "",
      fullImageUrl: "",
      showFullImage: false,
      showThumbnail: true,
      fullImageIndex: this.currentIndex,
      fullImageYearIndex: this.currentYear,
    };
  },
  created() {
    const imageKey = `../assets/projects/${this.image}`;
    const imageImport = images[imageKey];
    if (imageImport) {
      imageImport().then((image) => {
        this.imageUrl = image.default;
        this.fullImageUrl = this.imageUrl;
      });
    } else {
      console.error("Image not found:", imageKey);
    }
    window.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
};
</script>

<style scoped>
.project {
  max-width: 80vw;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  display: block;
  margin: 0 0 20px 0;
}

.small-project {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-end;
  margin: 20px;
}

@media (min-width: 1024px) {
  .project {
    display: flex;
  }
}

.content {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

@media (min-width: 1024px) {
  .content {
    width: 40rem;
    margin: 20px 20px 20px 0;
  }
}

.image-canvas {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  overflow: hidden;
}

.image-canvas img,
.image-canvas video {
  max-height: 20vh;
  max-width: 300px;
  border-radius: 10px 10px;
  object-fit: cover;
}

.image-canvas.detailed img,
.image-canvas.detailed video {
  max-height: 100vh;
  width: 500px;
  max-width: 80vw;
}

.image-canvas img:hover,
.image-canvas video:hover {
  cursor: default;
}

.image-canvas img.zoomable:hover,
.image-canvas video.zoomable:hover {
  cursor: zoom-in;
}

.head {
  margin: 0 0 20px 0;
}

.name {
  padding: 0;
}

.name-small {
  padding: 0px;
  margin: 6px 0;
  font-size: 18px;
}

.category {
  padding: 0 0 0 10px;
}

.details {
  text-align: justify;
}

.full-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: zoom-out;
  z-index: 100;
}

.full-image img,
.full-image video {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 10px;
}

.full-image video {
  width: auto;
  height: auto;
}

.iframe-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90%;
  height: 90%;
}

.iframe-container iframe {
  width: 100%;
  height: 100%;
  max-width: 1280px;
  max-height: 720px;
}

.play-button {
  position: absolute;
  font-family: "Encode Sans", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  color: #fff;
  background-color: #a92a2a;
  border-radius: 20px;
  padding: 10px;
  margin: 1rem;
  z-index: 2;
}

.play-button:hover {
  color: #fff;
  background-color: #7f2828;
  border-radius: 10px 10px;
}

.nav-button {
  font-size: 32px;
  font-weight: bold;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px 10px;
  z-index: 101;
}
.nav-button.prev {
  left: 10px;
}
.nav-button.next {
  right: 10px;
}
.nav-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
