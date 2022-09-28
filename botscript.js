const ctrls = {
  chatinp: document.getElementById("chat-input"),
  chatbtn: document.getElementById("chat-send-btn"),
  namebtn: document.getElementById("username-btn"),
  nameokb: document.getElementById("username-ok-btn"),
  nameinp: document.getElementById("username-box"),
  usernam: document.getElementById("chat-user").innerHTML,
  formpla: document.getElementsByClassName("input-group")
}
ctrls.nameinp.value = "Collabot"
ctrls.nameokb.click()
ctrls.chatinp.value = "Collabot has been deployed by " + ctrls.usernam + "!"
ctrls.chatbtn.click()
ctrls.chatinp.value = "Type -help for more commands"
ctrls.nameinp.value = ctrls.usernam
ctrls.nameokb.click()
ctrls.chatbtn.onclick = () => {
  if (ctrls.chatinp == "-help"){
    ctrls.nameinp.value = "Collabot"
    ctrls.nameokb.click()
    ctrls.chatinp.value = "Collabot Help:"
    ctrls.chatbtn.click()
    ctrls.chatinp.value = "There are no commands yet"
    ctrls.chatbtn.click()
  }
}