<template lang="html">
  <main>
    <div>
      <MessageBubble v-for="message in messages" v-bind="message" />
      <div v-bind:class="mode ? 'response--active' : ''">
        <div class="responseBubble">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import MessageBubble from './MessageBubble.vue'

export default {
  name: 'AppMain',
  props: {
    messages: Array,
    mode: Number
  },
  components: {
    MessageBubble
  }
}
</script>

<style scoped lang="scss">
.responseBubble {
  background-color: var(--clr-main--lt);
  border-radius: 18px;
  padding: var(--size-side--half);
  margin: var(--size-side--half);
  width: auto;
  display: inline-block;

  cursor: pointer;
}
.circle {
  background-color: var(--clr-text-lt);
  height: 8px;
  width: 8px;
  margin: 4px 2px 2px;
  display: inline-block;
  border-radius: 50%;
}

.response--active {
  text-align: right;

  .responseBubble { background-color: #eee; }
  .circle { background-color: #888; }
}
</style>
