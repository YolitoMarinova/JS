function solve() {
   let messagesDiv = document.getElementById('chat_messages');

   let currMessage = document.getElementById('chat_input');
   let sednBtn = document.getElementById('send');

   sednBtn.addEventListener('click', sendMessage);

   function sendMessage(e) {
      let messageText = currMessage.value;
      let sendedMess = document.createElement('div');
      sendedMess.className = 'message my-message';
      sendedMess.innerText = messageText;

      messagesDiv.appendChild(sendedMess);
      currMessage.value = '';
   };
}


