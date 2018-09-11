<template>
  <div id="app">
    <Header v-bind:mode="0" />
    <ChatHistory v-bind:messages="messages" />
    <MessageField />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MessageField from './components/MessageField.vue'
import ChatHistory from './components/ChatHistory.vue'

export default {
  name: 'app',
  data: function(){
    return {
      messages: [ // TODO Remove these demo messages!
        {
          sender: 0,
          date: 1536677019462,
          body: "Hello I think this is great!"
        },
        {
          sender: 1,
          date: 1536677019462,
          body: "This is a response!"
        },
        {
          sender: 0,
          date: 1536677019462,
          body: "Yet another message from me! May be a little bit longer but that's exactly the kind of stuff we need to test here!"
        },
        {
          sender: 0,
          date: 1536677019462,
          body: "Aaaaaaand one last message :)"
        },
        {
          sender: 1,
          date: 1536677019462,
          body: "This is a response!"
        },
        {
          sender: 0,
          date: 1536677019462,
          body: "Yet another message from me! May be a little bit longer but that's exactly the kind of stuff we need to test here!"
        },
        {
          sender: 0,
          date: 1536677019462,
          body: "Aaaaaaand one last message :)"
        },
        {
          sender: 1,
          date: 1536677019462,
          body: "This is a response!"
        },
        {
          sender: 0,
          date: 1536677019462,
          body: "Yet another message from me! May be a little bit longer but that's exactly the kind of stuff we need to test here!"
        },
        {
          sender: 0,
          date: 1536677019462,
          body: "Aaaaaaand one last message :)"
        },
        {
          sender: 1,
          date: 1536677019462,
          body: "This is a response!"
        },
        {
          sender: 0,
          date: 1536677019462,
          body: "Yet another message from me! May be a little bit longer but that's exactly the kind of stuff we need to test here!"
        },
        {
          sender: 0,
          date: 1536677019462,
          body: "Aaaaaaand one last message :)"
        }
      ]
    }
  },
  components: {
    Header,
    MessageField,
    ChatHistory
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Cabin:700|Nunito:300,700');

// Reset
a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}

// Constants
:root {
  --clr-text:         #231F20; // black
  --clr-text-lt:      #EFF4F4; // ultra light blue

  --clr-main:  #087E8B; // dark blue
  --clr-main--lt:  #52A8B2;
  --clr-accent:      #6BBAEC; // cta blue

  --size-side: 18px;
  --size-side--half: 9px;
  --size-text: 16px;
}

// Global Styles
* { box-sizing: border-box; }

// Typography
body {
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
  max-width: 620px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  &>header { flex-shrink: 0; }
  &>main {
    flex-grow: 1;
    overflow: scroll;
    // Workaround to autoscroll to bottom:
    display: flex;
    flex-direction: column-reverse;
  }
  &>footer { flex-shrink: 0; }

  // main { background-color: pink; }
}
</style>
