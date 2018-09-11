<template lang="html">
  <footer v-bind:class="mode ? 'response' : ''">
    <textarea v-model="message" v-autosize="message" rows="1" v-on:keyup.enter="submitMessage"></textarea>
    <a href="#" v-on:click="submitMessage">Send</a>
  </footer>
</template>

<script>
import Store from '../Store.js'

export default {
  name: 'AppFooter',
  props: {
    mode: Number
  },
  data: function(){
    return {
      message: ''
    }
  },
  methods: {
    submitMessage: function(event){
      if(event.shiftKey) return // allow for shift enter

      let messageObj = {
        sender: this.mode,
        date: Date.now(),
        body: this.message
      }

      Store.submitMessage(messageObj) // submit message to store
      this.message = '' // reset message input field
    }
  }
}
</script>

<style scoped lang="scss">
footer {
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: stretch;

  padding: var(--size-side--half) var(--size-side);

  textarea {
    font-size: var(--size-text);
    flex-grow: 1;
    resize: none;
    outline: none;
    background-color: #eee;
    border: 0;
    border-radius: 18px;
    margin-right: 5px;
    padding: 5px 10px;

    max-height: 140px;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--clr-accent);
  }

  &.response {
    background-color: var(--clr-main);

    textarea { background-color: white; }
    a { color: var(--clr-text-lt) }
  }
}
</style>
