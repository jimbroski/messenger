<template lang="html">
  <div class="wrapper">
    <div class="dropdown" v-on:click="menuOpen = !menuOpen">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <transition name="slide-fade">
      <div v-if="menuOpen" class="menu__backdrop" v-on:click="menuOpen = !menuOpen">
        <div class="menu">
          <a v-on:click="exportHistory">Export History</a>
          <a v-on:click="importHistory">Import History</a>
          <a v-on:click="deleteHistory">Reset All (DANGER!)</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Store from '../Store.js'

export default {
  name: 'HeaderMenu',
  data: function(){
    return {
      menuOpen: false
    }
  },
  methods: {
    deleteHistory: function(event){ Store.deleteHistory() },
    exportHistory: function(event){ Store.exportHistory() },
    importHistory: function(event){ Store.importHistory() }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
}
.dropdown {
  padding: 0 10px;
  cursor: pointer;
  // Disable mobile blue highlight:
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}
.dot {
  margin: 3px;

  background-color: var(--clr-text);
  border-radius: 50%;
  height: 3px;
  width: 3px;
}
.respond .dot {
  background-color: var(--clr-text-lt);
}

.menu__backdrop {
  max-width: var(--size-app);
  margin: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.menu {
  position: absolute;
  top: var(--size-side);
  right: var(--size-side);

  background-color: white;
  box-shadow: 0 0 6px var(--clr-gray-5);

  a {
    display: block;
    border-bottom: 1px solid var(--clr-gray-2);
    padding: var(--size-side--half) var(--size-side);

    text-decoration: none;
    color: var(--clr-gray-6);

    cursor: pointer;
    // Disable mobile blue highlight:
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;

    &:last-of-type { border: 0; }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
