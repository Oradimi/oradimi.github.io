<template>
<div :class="{ 'project': detailed, 'small-project': !detailed }">
    <div v-if="detailed" class="content">
        <div class="head">
            <h2 class="name"><a :href=link target="_blank">{{ name }}</a></h2>
            <em class="category">· {{ category }}</em>
        </div>
        <div class="details">
            <p class="description" v-html="formattedDescription"></p>
        </div>
    </div>
    <div v-else-if="typeof description !== 'undefined'">
        <h2 v-show="typeof name !== 'undefined'" class="name-small"><a :href=link target="_blank">{{ name }}</a></h2>
        <p class="description" v-html="formattedDescription"></p>
    </div>
    <div class="image-canvas" :class="{ 'detailed': detailed }" @click="zoomInHandler">
        <img :src="imageUrl" />
    </div>
</div>
<div v-if="showFullImage" class="full-image" @click="zoomInHandler">
    <div v-if="typeof video !== 'undefined'" class="iframe-container">
        <img v-if="showThumbnail" :src="imageUrl" />
        <button v-if="showThumbnail" @click.stop="playVideo" class="play-button">show video</button>
        <iframe v-if="!showThumbnail"
        :src="video" width="1280" height="720"
        frameborder="0" :title="name" allow="autoplay"
        allowfullscreen
        ></iframe>
    </div>
    <img v-else :src="imageUrl" />
</div>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: {
        detailed: {type: Boolean, required: false},
        name: {type: String, required: false},
        category: {type: String, required: false},
        description: {type: String, required: false},
        link: {type: String, required: false},
        image: {type: String, required: true},
        video: {type: String, required: false},
        index: {type: Number, required: false}
    },
    methods: {
        zoomInHandler() {
            this.showFullImage = !this.showFullImage
            if (!this.showFullImage) this.showThumbnail = true;
        },
        playVideo() {
            this.showThumbnail = false;
        },
    },
    computed: {
        formattedDescription() {
            return this.description.replace(/\n/g, '<br>');
        }
    },
    data() {
        return {
            imageUrl: '',
            showFullImage: false,
            showThumbnail: true
        };
    },
    created() {
        import(/* @vite-ignore */ `../assets/projects/${this.image}`)
            .then(image => {
                this.imageUrl = image.default;
            })
            .catch(error => {
                console.error('Error loading image:', error);
            });
    }
}
</script>

<style scoped>
.project {
    max-width: 80vw;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    display: block;
    margin: 0.5rem;
}

.small-project {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column-reverse;
    align-items: center;
    margin: 0.5rem;
}

@media (min-width: 1024px) {
    .project {
        display: flex;
    }
}

.content {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
}

@media (min-width: 1024px) {
    .content {
        width: 40rem;
    }
}

.image-canvas {
    justify-items: center;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.image-canvas img {
    max-height: 20vh;
    max-width: 300px;
    border-radius: 10px 10px;
    object-fit: cover;
} 

.image-canvas.detailed img {
    max-height: 100vh;
    width: 500px;
    max-width: 80vw;
}

.image-canvas img:hover {
    cursor: zoom-in;
}

.name {
    padding: 20px 20px 0px 20px;
}

.name-small {
    padding: 0px 10px 0px 0px;
    font-size: 18px;
}

.category {
    padding: 20px;
}

.details {
    padding: 20px;
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
}

.full-image img {
    max-width: 90%;
    max-height: 90%;
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
    font-family:
        'Encode Sans',
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        sans-serif;
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
</style>