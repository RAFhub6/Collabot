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
ctrls.chatinp.value = "Collabot has been deployed by" + ctrls.usernam + "!"
ctrls.chatbtn.click()
ctrls.nameinp.value = ctrls.usernam
ctrls.nameokb.click()
let params = `scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;
window.open("./src/gui.html", "Collabot", params)
