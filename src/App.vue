<template>
<HeaderItem/>
<router-view v-slot="{ Component }">
  <transition name="slide-fade">
    <component :is="Component" />
  </transition>
</router-view>
<footer>Made by Oradimi with ❤️</footer>
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

footer {
  text-align: center;
  margin: 2rem;
}
</style>