<template lang="html">
  <div class="wrapper" v-bind:data-sender="sender">
    <div v-on:click="showDate = !showDate" class="bubble">
      {{body}}
    </div>
    <small v-bind:class="showDate ? 'active': ''">- {{dateLabel}}</small>
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
      let options = {hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short'}

      if(messageDate.getYear() != nowDate.getYear()) {
        options.year = 'numeric'
      }

      return messageDate.toLocaleString(navigator.languages[0], options)
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

    opacity: 0;
    transition: .4s;

    &.active {
      opacity: 1;
    }
  }
}
.bubble {
  background-color: #eee;
  border-radius: 18px;
  padding: var(--size-side--half);

  cursor: pointer;
}
[data-sender="0"] { // sent
  margin-left: 20%;
}
[data-sender="1"] { // response
  margin-right: 20%;

  .bubble {
    background-color: var(--clr-main);
    color: var(--clr-text-lt);
  }
}
</style>
