function sendMessage2(){
    if(message2.value === ""){
  
    }
    else{
    }
    // Get the value from the input field
    var valueToSend = document.getElementById('message2').value;

    // Store the value in localStorage (you can use cookies, sessionStorage, etc. based on your requirements)
    localStorage.setItem('sentValue', valueToSend);

    // Redirect to the other HTML file (file2.html in this case)
    showA2.innerHTML += `<div class="modal-body"><div class="message"><h6 class="h6">${message2.value}</h6></div></div>`
    
    //  showA.innerHTML += `<div class="modal-body"><div class="message2"><h6 >${message2.value}</h6></div></div>`
    const value2 = document.getElementById('firstName').value+"_"+document.getElementById('lastName').value;
    window.location.href = `chat.html?data=${value2}`;
    message.value = ""
    
    window.location.href += 'chat.html';
}
var receivedValue2 = localStorage.getItem('sentValue2');

// Display the value in file2.html
    // showA.innerText += `<div class="modal-body"><div class="message"><h6 class="h6">${receivedValue}</h6></div></div>`
document.getElementById('showA2').innerHTML += `<div class="modal-body"><div class="message2"><h6>${receivedValue2}</h6></div></div>`;
message.value = ""
 
