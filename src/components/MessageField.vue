<template lang="html">
  <footer>
    <textarea rows="1"></textarea>
    <a href="#">Send</a>
  </footer>
</template>

<script>
export default {
  name: 'MessageField'
}
</script>

<style scoped lang="scss">
footer {
  background-color: white;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: stretch;

  textarea {
    flex-grow: 1;
    resize: none;
    outline: none;
    background-color: #eee;
    border: 0;
    border-radius: 18px;
    margin: 5px 10px;
    padding: 5px 10px;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--clr-primary);
  }
}
</style>
