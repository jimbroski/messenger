<template lang="html">
  <header v-bind:class="modes[mode].name">
    <h1>{{modes[mode].title}}</h1>
    <HeaderMenu />
  </header>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'

export default {
  name: 'AppHeader',
  data: function(){
    return {
      modes: [
        {
          name: 'send',
          title: 'Message You'
        },
        {
          name: 'respond',
          title: 'Respond to me'
        }
      ]
    }
  },
  props: {
    mode: {
      type: Number,
      default: 0,
      validator: function(value){
        return value <= 1
      }
    }
  },
  components: {
    HeaderMenu
  }
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;

  padding: var(--size-side);
  box-shadow: 0 0 6px var(--clr-gray-5);
  z-index: 1;

  &.send {
    background-color: white;
  }
  &.respond {
    background-color: var(--clr-main);
    color: var(--clr-text-lt);
  }
}

h1 {
  flex-grow: 1;

  font-weight: bold;
  font-size: 1.3em;
}
</style>
