const API_URL = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost' 
    ? 'http://127.0.0.1:5001/api' 
    : 'https://codepilot-backend-m2xi.onrender.com/api'; 



function getToken() {
    return localStorage.getItem('codepilot_token');
}

function getUser() {
    const userStr = localStorage.getItem('codepilot_user');
    return userStr ? JSON.parse(userStr) : null;
}

function logout() {
    localStorage.removeItem('codepilot_token');
    localStorage.removeItem('codepilot_user');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const authBtn = document.getElementById('authBtn');
    if (authBtn) {
        if (getToken()) {
            authBtn.textContent = 'Dashboard';
            authBtn.href = 'dashboard_v2.html';
        }
    }
});
