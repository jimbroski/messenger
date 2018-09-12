<template lang="html">
  <footer v-bind:class="mode ? 'response' : ''">
    <textarea ref="messageArea" v-model="message" v-autosize="message" rows="1" placeholder="Type Message"></textarea>
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
      let messageObj = {
        sender: this.mode,
        date: Date.now(),
        body: this.message
      }

      Store.submitMessage(messageObj) // submit message to store
      this.message = '' // reset message input field
      this.$refs.messageArea.focus()
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

  margin: var(--size-side--half) var(--size-side--half);
  padding: var(--size-side--half);

  border-radius: 20px;
  box-shadow: 0 1px 2px var(--clr-gray-5);
  background-color: white;

  textarea {
    flex-grow: 1;

    margin-right: 5px;
    padding: 5px 10px;
    max-height: 140px;

    font-size: var(--size-text);

    resize: none;
    outline: none;

    border: 0;

    // &:focus { background-color: var(--clr-gray-1); }
  }
  a {
    margin-right: 4px;
    text-decoration: none;
    font-weight: bold;
    color: var(--clr-accent);
    // Disable mobile blue highlight:
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  &.response {
    background-color: var(--clr-main);

    textarea {
      background-color: var(--clr-main);
      color: white;

      &::placeholder {
        color: rgba(255,255,255,0.6);
      }
    }
    a { color: var(--clr-text-lt) }
  }
}
</style>
