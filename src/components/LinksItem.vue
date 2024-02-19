<template>
<nav class="links">
    <a class="link-container" href="/resume.pdf" target="_blank" @mouseover="hovered = true" @mouseleave="hovered = false">
        <img src="../assets/logos/resume.svg" alt="resume"/>
        <p class="link-name">Resume</p>
    </a>
    <a class="link-container" href="https://github.com/Oradimi" target="_blank" @mouseover="hovered = true" @mouseleave="hovered = false">
        <img src="../assets/logos/github.svg" alt="github"/>
        <p class="link-name">GitHub</p>
    </a>
    <a class="link-container" href="https://twitter.com/Oradimi" target="_blank" @mouseover="hovered = true" @mouseleave="hovered = false">
        <img src="../assets/logos/twitter.svg" alt="twitter"/>
        <p class="link-name">Twitter</p>
    </a>
    <a class="link-container" href="https://www.youtube.com/@Oradimi" target="_blank" @mouseover="hovered = true" @mouseleave="hovered = false">
        <img src="../assets/logos/youtube.svg" alt="youtube"/>
        <p class="link-name">YouTube</p>
    </a>
    <a class="link-container" href="https://www.linkedin.com/in/logan-argouse-8779422aa/" target="_blank" @mouseover="hovered = true" @mouseleave="hovered = false">
        <img src="../assets/logos/linkedin.svg" alt="linkedin"/>
        <p class="link-name">LinkedIn</p>
    </a>
</nav>
</template>

<script>
export default {
    name: 'LinksItem',
    data() {
        return {
            hovered: false
        };
    }
}
</script>

<style scoped>
.link-container {
  position: relative;
  display: inline-block;
}

.link-name {
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.link-container:hover .link-name {
  opacity: 1;
}

img {
    filter: invert(100%) sepia(0%) saturate(2766%) hue-rotate(307deg) brightness(113%) contrast(100%);
    width: 30px;
    height: 30px;
    justify-self: center;
    align-self: center;
}

.links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0rem;
}

.links > * {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 60px;
    color: #fff;
    background-color: #a92a2a;
    border-radius: 50%;
    padding: 0px;
    margin: 1rem;
}

.links > *:hover {
    background-color: #531a1a;
}
</style>