let botui = new BotUI("bot-stomach")
let bot

function makeMessage(inputData) {

    let time = Math.round(Math.random() * 3000)

    botui.message.add({
        
        content: inputData,
        delay: time,
        type: "html",
        loading: true

    })
    

}

let msgIn = document.getElementById("in")
msgIn.parentNode.addEventListener("submit", e => {
    e.preventDefault()
})

function humanIn() {

    let msgInVal = msgIn.value
    msgIn.value = ""
    msgIn.blur()


    botui.message.add({
        human: true,
        content: msgInVal
    }).then(() => {

        bot.reply("Bibo", msgInVal).then((res) => {
            makeMessage(res)
        })

    })


}


bot = new RiveScript()
 
bot.loadFile([
  "brain/greetings.rive",
  "brain/hud.rive",
  "brain/bye.rive"
]).then(loading_done).catch(loading_error)
 
function loading_done() {
  console.log("Bot has finished loading!")

  bot.sortReplies()
 
  let username = "local-user"
 
  bot.reply(username, "Hello, bot!").then(function(reply) {
    console.log("The bot says: " + reply)
  })
}
 
function loading_error(error, filename, lineno) {
  console.log("Error when loading files: " + error)
}