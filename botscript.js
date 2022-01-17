const ctrls = {
  chatinp: document.getElementById("chat-input"),
  chatbtn: document.getElementById("chat-send-btn"),
  namebtn: document.getElementById("username-btn"),
  nameokb: document.getElementById("username-ok-btn"),
  nameinp: document.getElementById("username-box"),
  usernam: document.getElementById("chat-user").innerHTML,
  initpla: document.getElementById("chat-sound-btn")
}
const execbtn = "<button class='btn btn-default' onclick='execmsg();'>Executor</button>"
function execmsg() {
  let cmdrun = prompt("Collabot Executor:")
  if (cmdrun == "test") {
    ctrls.chatinp.value = "This is a demo of Collabot."
    ctrls.chatbtn.click()
  }
}
ctrls.nameinp.value = "Collabot"
ctrls.nameokb.click()
ctrls.chatinp.value = "Collabot has been deployed by" + ctrls.usernam + "!"
ctrls.chatbtn.click()
ctrls.nameinp.value = ctrls.usernam
ctrls.nameokb.click()

ctrls.initpla.document.documentElement.innerHTML = '';
ctrls.initpla.innerHTML = execbtn
