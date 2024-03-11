<template>
<div class="main">
    <div class="image-canvas">
        <img src="../assets/misc/photo.jpg" class="aligned-right">
    </div>
    <h2>
        {{ $t('about_content.title') }}
    </h2>
    <i18n-t tag="p" keypath="about_content.body.main">
        <template v-slot:link>
            <router-link to='/gallery'><b class='blue'>{{ $t('about_content.body.link') }}</b></router-link>
        </template>
        <template v-slot:resume>
            <a href='/resume.pdf' target='_blank'><b class='blue'>{{ $t('about_content.body.resume') }}</b></a>
        </template>
        <template v-slot:t0>
            <b>{{ $t('about_content.body.t0') }}</b>
        </template>
        <template v-slot:t1>
            <b>{{ $t('about_content.body.t1') }}</b>
        </template>
        <template v-slot:t2>
            <b>{{ $t('about_content.body.t2') }}</b>
        </template>
    </i18n-t>
    <LinksItem/>
</div>
</template>

<script>
import LinksItem from "@/components/LinksItem.vue";
export default {
    name: 'AboutItem',
    components: {
        LinksItem
    },
}
</script>

<style scoped>
.aligned-right {
    float: none;
}

@media (min-width: 1024px) {
    .aligned-right {
        float: right;
    }
}

.image-canvas img {
    max-height: 40vh;
    max-width: 300px;
    padding: 2rem;
    border-collapse: separate; 
    border-radius: 100%;
    object-fit: cover;
}

.main {
    display: block;
    justify-content: center;
    align-items: center;
    text-align: center;
}

h2 {
    font-size: 2.5em;
    font-weight: normal;
}

p {
    text-align: justify;
    white-space: pre-line;
}

@media (min-width: 1024px) {
    p {
        max-width: 600px;
    }
    .image-canvas img {
        shape-outside: circle()
    }
}

.blue {
    color: var(--color-link)
}
</style>