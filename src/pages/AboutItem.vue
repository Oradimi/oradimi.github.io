<template>
<div class="main">
    <LinksItem/>
    <div class="image-canvas">
        <img src="../assets/misc/photo.jpg" align="right">
    </div>
    <h2>
        Who am I?
    </h2>
    <p>
        I'm someone who prefers to work in front of a screen.
        Ever since I was little, I've <b>always loved video games</b>
        and at the time, I contemplated the idea of creating them myself.
        It is towards this goal that I've worked ever since,
        exploring all the puzzle pieces of video game creation.
        Through learning a lot of things by myself, I became <b>versatile</b>
        and I'm capable of <b>quickly learning</b> new concepts.<br>
        If you'd like to get in touch, you can find my contact information
        in my <a href="/resume.pdf">resume</a>.
    </p>
</div>
</template>

<script>
import LinksItem from "@/components/LinksItem.vue"
export default {
    name: 'AboutItem',
    components: {
        LinksItem
    },
}
</script>

<style scoped>
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
    font-size: 48px;
    font-weight: normal;
}

p {
    text-align: justify;
}

@media (min-width: 600px) {
    p {
        max-width: 30vw;
    }
}

b {
    color: #20ade0;
}
</style>