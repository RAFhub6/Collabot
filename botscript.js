const ctrls = {
  chatinp: document.getElementById("chat-input"),
  chatbtn: document.getElementById("chat-send-btn"),
  namebtn: document.getElementById("username-btn"),
  nameokb: document.getElementById("username-ok-btn"),
  nameinp: document.getElementById("username-box"),
  usernam: document.getElementById("chat-user").innerHTML
}
function execmsg() {
  let cmdrun = prompt("Collabot Executor:")
  if (cmdrun == "test") {
    ctrls.chatinp.value = "This is a demo of Collabot."
    ctrls.chatbtn.click()
  }
  if (cmdrun == "refresh") {
    delete ctrls
    delete execbtn
    delete cb-btn
    x=document.createElement("script");x.src="https://rafhub6.github.io/Collabot/botscript.js"; document.head.appendChild(x);
  }
}
ctrls.nameinp.value = "Collabot"
ctrls.nameokb.click()
ctrls.chatinp.value = "Collabot has been deployed by" + ctrls.usernam + "!"
ctrls.chatbtn.click()
ctrls.nameinp.value = ctrls.usernam
ctrls.nameokb.click()

cb-btn=document.createElement("button");cb-btn.class=='btn btn-default input-group';cb-btn.onclick=="execmsg();";cb-btn.value=="Executor";document.head.appendChild(cb-btn);
