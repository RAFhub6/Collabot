alert("Welcome to Collabot V1 , inspired by fylrobot");
var tunnel={}; var userName=document.getElementById('username-box'); var ok=document.getElementById('chat-input'); chatI.value=phrase;
usern=document.getElementById('chat-send-btn').click();}; tunnel.takeTurn=function(){document.getElementById('turn-btn').click();};
ok.click();};tunnel.chat=function(phrase){var chatI=document.getElementById('chat-input'); chatI.value=phrase;
document.getElementById('chat-send-btn').click();}; tunnel.takeTurn=function(){document.getElementById('turn-btn').click();};
tunnel.vote=function(vote){var vy=document.getElementById('vote-yes'); var vn=document.getElementById('vote-no'); if (vote === 0)
vy.click(); if (vote === 1){vn.click();}}}; var autotyper={}; autotyper.typePhrase=function(str){function optKey(letter{ var
num=letter.charCodeAt(0); let element = document.querySelector('canvas'); element.dispatchEvent(new KeyboardEvent('keydown',{'key': letter,
'code': 'Key' + letter, keyCode: num, which: num,   shiftKey: false,   ctrlKey: false, metaKey:
KeyboardEvent('keyup',{'key': letter, 'code': 'Key' + letter, keyCode: num, which: num,    shiftKey: false, ctrlKey: false, metaKey:
false })); }; for (var i = 0; i <str.length; i++) {
var curLetter=str.charAt(i); optKey(curLetter);}}; function atPrompt(){var k=prompt('what to type? (Focus on VM display before it starts autotyping, 3 second countdown)'); document.querySelector('canvas'.focus(); setTimeout(function()
{autotyper.typePhrase(k);}, 3000);}
var name=document.getElementById('chat-user').innerHTML;
tunnel.changeName("Collabot"); tunnel.chat("Collabot has been invited by @" + name + "!");
tunnel.changeName(name); var input=document.createElement("input");input.placeholder="bot cmds here"; input.id="inp";