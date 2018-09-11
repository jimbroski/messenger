<template lang="html">
  <div v-bind:data-sender="sender">
    {{body}} - {{date}}
  </div>
</template>

<script>
export default {
  name:  'MessageBubble',
  props: {
    body: String,
    date: Number,
    sender: Number
  }
}
</script>

<style scoped lang="scss">
div {
  background-color: #eee;
  border-radius: 18px;
  padding: var(--size-side--half);
  margin: var(--size-side--half);
}
[data-sender="0"] { // sent
  margin-left: 20%;
}
[data-sender="1"] { // response
  background-color: var(--clr-main);
  color: var(--clr-text-lt);

  margin-right: 20%;
}
</style>
