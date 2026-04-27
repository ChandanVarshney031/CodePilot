const API_URL = 'http://localhost:5000/api';

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
    window.location.href = '/';
}

document.addEventListener('DOMContentLoaded', () => {
    const authBtn = document.getElementById('authBtn');
    if (authBtn) {
        if (getToken()) {
            authBtn.textContent = 'Dashboard';
            authBtn.href = '/dashboard.html';
        }
    }
});
