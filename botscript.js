const chatinnner = document.getElementByID("chat-input").innerHTML
const execbtp = document.getElementByID("chat-sound-btn").innerHTML
const execbtn = "<button class='btn btn-default' onclick='execmsg();'>Executor</button>"

function execmsg() {
  let cmdrun = prompt("Collabot Executor:")
  if (cmdrun == "line") {
    chatinner.document.write("This is a demo of Collabot.")
  }
}
executor.document.write(execbtn)
