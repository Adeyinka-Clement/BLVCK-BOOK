
function sendMessage(){
  if(message.value === ""){

  }
  else{

    // var messageOut = message.value
    // showA.innerHTML += `<div class="modal-body"><div class="message"><h6 class="h6">${message.value}</h6></div></div>`
    // showA2.innerHTML += `<div class="modal-body"><div class="message2"><h6>${message.value}</h6></div></div>`
    var valueToSend = document.getElementById('message').value;

    // Store the value in localStorage (you can use cookies, sessionStorage, etc. based on your requirements)
    localStorage.setItem('sentValue2', valueToSend);

    // Redirect to the other HTML file (file2.html in this case)
    showA.innerHTML += `<div class="modal-body"><div class="message"><h6 class="h6">${message.value}</h6></div></div>`
    
    //  showA.innerHTML += `<div class="modal-body"><div class="message2"><h6 >${message2.value}</h6></div></div>`
    
    message2.value = ""
    
    window.location.href += 'clement.html';
  }
}  
var receivedValue = localStorage.getItem('sentValue');

// Display the value in file2.html
    // showA.innerText += `<div class="modal-body"><div class="message"><h6 class="h6">${receivedValue}</h6></div></div>`
document.getElementById('showA').innerHTML += `<div class="modal-body"><div class="message2"><h6>${receivedValue}</h6></div></div>`;
message.value = ""
 
 // Extract the value from URL parameter
 const urlParams = new URLSearchParams(window.location.search);
 const value = urlParams.get('data');

 // Display the received value
 const displayValueElement = document.getElementById('chatUsername');
 displayValueElement.textContent = value;
 