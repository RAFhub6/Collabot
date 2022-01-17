const chatfield = document.getElementById("chat-input")
const execbta = document.getElementById("chat-sound-btn")
const execbtn = "<button class='btn btn-default' onclick='execmsg();'>Executor</button>"

function execmsg() {
  let cmdrun = prompt("Collabot Executor:")
  if (cmdrun == "line") {
    chatfield.document.write("This is a demo of Collabot.")
  }
}
execbta.innerHTML = execbtn
