<template>
  <nav class="links">
    <a class="link-container" href="https://github.com/Oradimi" target="_blank">
      <img src="../assets/logos/github.svg" alt="github" />
      <p class="link-name">GitHub</p>
    </a>
    <a class="link-container" href="https://twitter.com/Oradimi" target="_blank">
      <img src="../assets/logos/twitter.svg" alt="twitter" />
      <p class="link-name">Twitter</p>
    </a>
    <a class="link-container" href="https://www.youtube.com/@Oradimi" target="_blank">
      <img src="../assets/logos/youtube.svg" alt="youtube" />
      <p class="link-name">YouTube</p>
    </a>
  </nav>
</template>

<script>
export default {
  name: "LinksItem",
};
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
  background-color: var(--color-background-soft);
  color: var(--color-text);
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  word-break: keep-all;
  white-space: nowrap;
  z-index: 2;
}

.link-container:hover .link-name {
  opacity: 1;
}

img {
  filter: invert(100%) sepia(0%) saturate(2766%) hue-rotate(307deg) brightness(var(--light-percent)) contrast(100%);
  transition: filter 0.5s;
  width: 30px;
  height: 30px;
  justify-self: center;
  align-self: center;
}

img:hover {
  filter: invert(100%) sepia(0%) saturate(2766%) hue-rotate(307deg) brightness(var(--light-percent-hovered)) contrast(100%);
  transition: filter 0.2s;
}

.links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  margin: 1rem 0;
}

.links > * {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  /* background-color: var(--color-link-selected); */
  border-radius: 50%;
  padding: 0px;
  margin: 0 1rem;
}

.links > *:hover {
  /* background-color: var(--color-link-hover); */
  background-color: transparent;
}

.router-link-active img,
.router-link-exact-active img {
  filter: invert(64%) sepia(33%) saturate(2348%) hue-rotate(315deg) brightness(83%) contrast(92%);
}

[data-theme="light"] .router-link-active img,
[data-theme="light"] .router-link-exact-active img {
  filter: invert(46%) sepia(89%) saturate(393%) hue-rotate(341deg) brightness(93%) contrast(83%);
}
</style>
