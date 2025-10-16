function openChat() {
  document.getElementById("chatBox").classList.remove("hidden");
}

function sendPrompt() {
  const prompt = document.getElementById("userInput").value;

  fetch("http://127.0.0.1:5678/webhook-test/7a6e86ba-55cd-49e3-aa13-46b35902e3d5", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    prompt: prompt,
    sessionId: "ronen-session"
  })
})
  .then(response => response.json())
  .then(data => {
  document.getElementById("responseBox").innerText = data.output.output;
})
  .catch(error => {
    document.getElementById("responseBox").innerText = "Error: " + error.message;
  });
}