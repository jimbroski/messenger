<template>
  <div id="app">
    <AppHeader v-bind:mode="activeSender" />
    <AppMain v-bind:mode="activeSender" v-bind:messages="messages" />
    <AppFooter v-bind:mode="activeSender" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue'
import Store from './Store.js'

Store.initializeFromStorage()

export default {
  name: 'app',
  data: function(){
    return Store.state
  },
  components: {
    AppHeader,
    AppFooter,
    AppMain
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cabin:700|Nunito:300,700');

// Reset
a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}

// Constants
:root {
  --clr-text:     #231F20; // black
  --clr-text-lt:  #EFF4F4; // ultra light blue
  --clr-main:     #62AAD7; // dark blue
  --clr-main--lt: #AED9F4;
  --clr-accent:   #6BBAEC; // cta blue
  --clr-gray-1:   rgba(0,0,0,0.08);
  --clr-gray-2:   rgba(0,0,0,0.12);
  --clr-gray-5:   rgba(0,0,0,0.4);
  --clr-gray-6:   rgba(0,0,0,0.6);

  --size-side: 18px;
  --size-side--half: 9px;
  --size-text: 16px;
  --size-app: 620px;
}

// Global Styles
* { box-sizing: border-box; }

// Typography
html, body { height: 100%; }
body,
textarea {
  color: var(--clr-text);
  font-size: var(--size-text);
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  // font-family: "Cabin", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5, h6 { font-weight: bold }
strong, b { font-weight: bold }
a { color: var(--clr-main)}

#app {
  margin: auto;
  max-width: var(--size-app);
  height: 100%;

  display: grid;
  grid-template-rows: max-content auto max-content max-content;

  &>main {
    overflow: scroll;
    // Workaround to autoscroll to bottom:
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
