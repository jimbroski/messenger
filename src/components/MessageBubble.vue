<template lang="html">
  <div class="wrapper" v-bind:data-sender="sender">
    <div class="bubble">{{body}}</div>
    <small>{{dateLabel}}</small>
  </div>
</template>

<script>
export default {
  name:  'MessageBubble',
  props: {
    body: String,
    date: Number,
    sender: Number
  },
  data: function(){
    return {
      showDate: false
    }
  },
  computed: {
    dateLabel: function(){
      let messageDate = new Date(this.date)
      let nowDate = new Date(Date.now())

      return messageDate.toLocaleString(navigator.languages[0], {
        hour: '2-digit', minute: '2-digit'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 10px var(--size-side--half);

  small {
    margin-top: 3px;
    font-size: .7em;
    text-align: right;
    display: block;
    color: #888;
  }
}
.bubble {
  display: inline-block;

  text-align: left;
  background-color: var(--clr-gray-1);
  border-radius: 18px;
  padding: var(--size-side--half);
  white-space: pre-wrap;

  cursor: pointer;
  // Disable mobile blue highlight:
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}
[data-sender="0"] { // sent
  margin-left: 20%;
  text-align: right;
}
[data-sender="1"] { // response
  display: inline-block;

  margin-right: 20%;

  .bubble {
    background-color: var(--clr-main);
    color: var(--clr-text-lt);
  }
}
</style>
