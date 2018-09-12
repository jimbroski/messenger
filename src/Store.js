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
  },
  deleteHistory(){
    if(confirm("Danger!\nAre you certain you want to delete your entire chat history?\nThis can not be undone!")){
      if(this.debug) console.log('Confirmed: Delete all messages')
      localStorage.setItem('messages', '')
      this.state.messages = []
    }else{
      if(this.debug) console.log('Not confirmed to delete all messages')
    }
  },
  exportHistory(){
    if(this.debug) console.log('Download History as JSON string')
    this._download('history.json', localStorage.getItem('messages'))
  },
  _download(filename, content) {
    let element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content))
    element.setAttribute('download', filename)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }
}
