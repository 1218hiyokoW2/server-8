'use strict';

const loginFormEl = document.querySelector('form');
loginFormEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (res.ok) {
    location.href = 'index.html';
  } else {
    const data = await res.json();
    document.querySelector('p').textContent = data.message;
  }
});
