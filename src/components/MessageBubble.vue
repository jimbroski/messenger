<template lang="html">
  <div class="outer" v-bind:data-sender="sender">
    <div class="inner">
      <div class="bubble">{{body}}</div>
      <small>{{dateLabel}}</small>
    </div>
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
.outer {
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
}
[data-sender="0"] { // sent
  margin-left: 20%;
  text-align: right;
}
[data-sender="1"] { // response
  margin-right: 20%;

  .inner {
    display: inline-block;
  }

  .bubble {
    background-color: var(--clr-main);
    color: var(--clr-text-lt);
  }
}
</style>
