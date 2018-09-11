<template lang="html">
  <header v-bind:class="modes[mode].name">
    {{modes[mode].title}}
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: function(){
    return {
      modes: [
        {
          name: 'send',
          title: 'Messenger'
        },
        {
          name: 'respond',
          title: 'Responding'
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
  }
}
</script>

<style scoped lang="scss">
header {
  padding: var(--size-side);
  font-weight: bold;
  font-size: 1.3em;
  box-shadow: 0 0 6px #111;
  z-index: 1;

  &.send {
    background-color: white;
  }
  &.respond {
    background-color: var(--clr-main);
    color: var(--clr-text-lt);
  }
}
</style>
