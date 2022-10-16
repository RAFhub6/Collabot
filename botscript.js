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
ctrls.nameinp.value = ctrls.usernam
ctrls.nameokb.click()
var myWindow = window.open("http://rafhub6.github.io/Collabot/src/gui.html", "MsgWindow", "width=200,height=100");