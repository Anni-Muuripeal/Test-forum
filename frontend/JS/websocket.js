import { displayErrorMessage } from './errormessage.js';
//This variable will hold the WebSocket connection object.
let socket ;

export function webSoc(nicknameTo, nicknameFrom) {
  //If there is no open WebSocket connection, the code creates a new WebSocket connection by instantiating a WebSocket object and passing the WebSocket URL as a parameter.
  socket = new WebSocket("ws://localhost:8080/ws");

  const messageBox = document.getElementById("message-box");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  // Event listener for WebSocket connection successfully opened
  socket.addEventListener("open", () => {
    console.log("WebSocket connection established.");
  });


  // Event listener for the log out button
  const logOut = document.getElementById("logout-button");
  logOut.addEventListener("click", () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.close();
      console.log("WebSocket connection closed.");
    }
  });

  // Event listener for WebSocket errors
  socket.addEventListener("error", (error) => {
    console.error("WebSocket error:", error);
  });

  // When a message is received from the server, the "message" event is triggered. 
  socket.addEventListener("message", (event) => {
    //The received data is parsed as JSON, 
    //and the resulting message object is passed to the handleMessage function for further processing.
    const message = JSON.parse(event.data);
    handleMessage(message);
  });

  // Event listener for the send button
  sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    //The content of the message input field is retrieved and stored in the message variable.
    const message = messageInput.value;
    // Send the message, sender and recipient to the server
    sendMessage(message, nicknameTo, nicknameFrom);
    // After sending the message, the content of the message input field is cleared
    messageInput.value = "";
  });

  messageInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const message = messageInput.value;
      sendMessage(message, nicknameTo, nicknameFrom);
      messageInput.value = "";
    }
  })

  // Function to handle the received message
  function handleMessage(message) {
    let senderNickname = nicknameTo;

    if (message.nicknameto === nicknameTo) {
      senderNickname = nicknameFrom;
    }

    const messageText = message.message;
    const formattedTime = new Date(message.date).toLocaleString();
    messageBox.value += `${formattedTime} - ${senderNickname}: ${messageText}\n`;
    //if new message has been written, then scrolling automatically to the bottom of the message box
    messageBox.scrollTop = messageBox.scrollHeight;
  }
}

//the WebSocket connection in the sendMessage function is used to transmit the message to the server in real-time, while the HTTP POST request is used to persist the message on the server for long-term storage.
export function sendMessage(message, nicknameTo, nicknameFrom) {
  //first checks if there is an open WebSocket connection (socket is not null and its readyState is WebSocket.OPEN).
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    console.error("WebSocket connection not open.");
    return;
  }

  const date = new Date(); // Current date and time

  //If the WebSocket connection is open, the code creates a data object that represents the message data to be sent to the server
  const data = {
    message: message,
    nicknamefrom: nicknameFrom,
    nicknameto: nicknameTo,
    date: date
  };

  //it is sent to the server using socket.send().
  socket.send(JSON.stringify(data));

  //After sending the message via WebSocket, the code makes an HTTP POST request to the /message endpoint on the server.
  fetch("/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        console.log("Message sent successfully");
      } else {
        return response.text();
      }
    })
    .then(errorMessage => {
      if (errorMessage) {
        displayErrorMessage(errorMessage);
      }
    })
    .catch(error => {
			displayErrorMessage(`An error occurred while sending message: ${error.message}`);
    });
}
