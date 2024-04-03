const form = document.querySelector(".typing-area"),
incoming_id = form.querySelector(".incoming_id").value,
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsumbit = (e) => {
    e.preventDefault();
}

inputField.focus();

inputField.onkeyup = () => {
    if(inputField.value != ""){

    }else {
        
    }
}