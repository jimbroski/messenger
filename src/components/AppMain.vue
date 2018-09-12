<template lang="html">
  <main>
    <div>
      <template v-for="(message, index) in messages">
        <TimeLine v-bind:date="message.date" v-if="showTimeline(index)" />
        <MessageBubble v-bind="message" />
      </template>

      <div v-bind:class="mode ? 'response--active' : ''">
        <div v-on:click="toggleSender" class="responseBubble">
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
import TimeLine from './TimeLine.vue'
import Store from '../Store.js'

export default {
  name: 'AppMain',
  props: {
    messages: Array,
    mode: Number
  },
  methods: {
    toggleSender: function(event){
      Store.toggleSender()
    },
    showTimeline: function(index){
      let thisMessage = this.messages[index]
      let prevMessage = this.messages[index - 1] || new Date()

      let messageDate = new Date(thisMessage.date)
      let prevDate = new Date(prevMessage.date)

      return messageDate.toDateString() != prevDate.toDateString()
    }
  },
  components: {
    MessageBubble,
    TimeLine
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
