'use strict';

const result = document.getElementById('result');

// プロフィール取得（要認証）
const getProfileButton = document.getElementById('getProfileButton');
if (getProfileButton) {
  getProfileButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/profile');
      if (res.ok) {
        const data = await res.json();
        if (result) result.textContent = 'ログインユーザー：' + data.username;
      } else {
        if (result) result.textContent = 'ログインしていません';
      }
    } catch (err) {
      if (result) result.textContent = 'エラーが発生しました';
    }
  });
}

// ログアウト
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
  logoutButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/logout', { method: 'POST' });
      if (res.ok) {
        if (result) result.textContent = 'ログアウトしました';
      } else {
        if (result) result.textContent = 'ログインしていません';
      }
    } catch (err) {
      if (result) result.textContent = 'エラーが発生しました';
    }
  });
}
