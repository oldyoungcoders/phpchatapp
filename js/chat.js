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
        sendBtn.classList.add("active");
    }else {
        sendBtn.classList.remove("active");
    }
}

sendBtn.onclick = () => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/insert-chat.php", true);

    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                inputField.value = "";
                scrollToBottom();
            }
        }
    }
    let formData = new formData(form);
    xhr.send(formData);
}

chatBox.onmouseenter = () => {
    chatBox.classList.add("active");
}

chatBox.onmouseleave = () => {
    chatBox.classList.remove("active");
}