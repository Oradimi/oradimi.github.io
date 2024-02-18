<template>
<div></div>
<div class="wrapper">
  <HeaderItem/>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</div>
<footer>
  Made by myself with <a href="https://vuejs.org/" target="_blank"><b>Vue.js</b></a>
</footer>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue'
export default {
  name: 'PortfolioItem',
  components: {
    HeaderItem
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
}

footer {
  text-align: center;
  align-items: flex-end;
}

small {
  font-size: 0.8rem;
}
</style>