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
// document.getElementById('advice-form').addEventListener('submit', async (e) => {
//     e.preventDefault();
  
    const adviceOutput = document.getElementById('advice-output');
    // Show the typing animation
    adviceOutput.classList.add('typing');
    adviceOutput.innerHTML = "Typing...";
  
    // Simulate server delay with a fetch call
    const response = await fetch('/get_advice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
  
    const data = await response.json();
  
    // Remove the typing effect and show advice after a delay
    setTimeout(() => {
      adviceOutput.classList.remove('typing');
      adviceOutput.innerHTML = data.advice;
    }, 2000); // Delay to show typing effect
//   });
  