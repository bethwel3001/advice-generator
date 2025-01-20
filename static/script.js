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
  