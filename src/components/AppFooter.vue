<template lang="html">
  <footer>
    <textarea v-model="message" v-autosize="message" rows="1"></textarea>
    <a href="#">Send</a>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: function(){
    return {
      message: ''
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
}
</style>
