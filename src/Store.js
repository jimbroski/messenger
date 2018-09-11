const demoMessages = [ // TODO Remove these demo messages!
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
    date: 1536377019462,
    body: "Aaaaaaand one last message :)"
  },
  {
    sender: 1,
    date: 1536697018462,
    body: "This is a response!"
  },
  {
    sender: 0,
    date: 1536678019462,
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

export default {
  debug: true,
  state: {
    messages: demoMessages,
    activeSender: 0
  },
  toggleSender(){
    if(this.debug) console.log('Toggle sender. Previously:', this.state.activeSender)
    this.state.activeSender = +!this.state.activeSender
  },
  submitMessage(message){
    if(this.debug) console.log('Submit message', message)
    this.state.messages.push(message)
  }
}
