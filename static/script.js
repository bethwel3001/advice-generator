document.getElementById('advice-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const question = document.getElementById('question').value;
    const response = await fetch('/get_advice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
  
    const data = await response.json();
    document.getElementById('advice-output').innerText = data.advice;
  });

//   
document.getElementById('advice-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const adviceOutput = document.getElementById('advice-output');
    adviceOutput.innerHTML = "<span class='typing'>Typing...</span>";
  
    const response = await fetch('/get_advice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
  
    const data = await response.json();
  
    // Add the typing effect before displaying the advice
    setTimeout(() => {
      adviceOutput.innerHTML = data.advice;
    }, 2000); // 2-second delay for typing effect
  });
  