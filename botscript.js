const ctrls = {
  chatinp: document.getElementById("chat-input"),
  chatbtn: document.getElementById("chat-send-btn"),
  namebtn: document.getElementById("username-btn"),
  nameokb: document.getElementById("username-ok-btn"),
  nameinp: document.getElementById("username-box"),
  usernam: document.getElementById("chat-user").innerHTML,
  formpla: document.getElementsByClassName("col-md-8")
}
function execmsg() {
  let cmdrun = prompt("Collabot Executor:")
  if (cmdrun == "test") {
    ctrls.chatinp.value = "This is a demo of Collabot."
    ctrls.chatbtn.click()
  }
  if (cmdrun == "refresh") {
    delete ctrls
    delete execmsg
    x=document.createElement("script");x.src="https://rafhub6.github.io/Collabot/botscript.js"; document.head.appendChild(x);
  }
  if (cmdrun == "spam") {
    let spamtime = prompt("How much time to spam?")
    let spamphrase = prompt("What is the phrase/text?")
    times (spam-time) () => {
      ctrls.chatinp.value = spamphrase
      ctrls.chatbtn.click()
    }
}
ctrls.nameinp.value = "Collabot"
ctrls.nameokb.click()
ctrls.chatinp.value = "Collabot has been deployed by" + ctrls.usernam + "!"
ctrls.chatbtn.click()
ctrls.nameinp.value = ctrls.usernam
ctrls.nameokb.click()

c=document.createElement("button");
c.value = "Executor"
c.onclick = "execmsg();"
c.class = "btn btn-default"
ctrls.formpla.document.appendChild(c);
