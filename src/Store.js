// const sampleMessages = [
//   {
//     sender: 0,
//     date: 1536677019462,
//     body: "Hello I think this is great!"
//   }
// ]

export default {
  debug: true,
  state: {
    messages: [],
    activeSender: 0
  },
  toggleSender(){
    if(this.debug) console.log('Toggle sender. Previously:', this.state.activeSender)
    this.state.activeSender = +!this.state.activeSender
  },
  submitMessage(message){
    if(this.debug) console.log('Submit message', message)
    message.body = message.body.trim() // trim trailing and leading spaces/line breaks
    this.state.messages.push(message)
    localStorage.setItem('messages', JSON.stringify(this.state.messages))
    if(this.debug) console.log('Updated Localstorage', this.state.messages)
  },
  initializeFromStorage(){
    let messages = JSON.parse(localStorage.getItem('messages') || '[]')
    if(this.debug) console.log('Initialize app from localstorage', messages)
    this.state.messages = messages
  }
}
