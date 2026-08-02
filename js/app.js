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
    // Inject brand background decorations dynamically on all pages
    const bgContainer = document.createElement('div');
    bgContainer.className = 'bg-decorations';
    bgContainer.innerHTML = `
        <div class="grid-overlay"></div>
        <svg class="bg-waves" width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.35;">
            <defs>
                <linearGradient id="purple-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#d946ef" />
                    <stop offset="100%" stop-color="#22d3ee" />
                </linearGradient>
                <linearGradient id="indigo-pink" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#6366f1" />
                    <stop offset="100%" stop-color="#ec4899" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="15" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
            <path d="M 0,200 C 350,80 650,300 950,150 C 1200,50 1350,150 1440,80" fill="none" stroke="url(#purple-cyan)" stroke-width="4.5" filter="url(#glow)" />
            <path d="M 0,720 C 400,580 800,880 1120,720 C 1300,640 1380,780 1440,700" fill="none" stroke="url(#indigo-pink)" stroke-width="4" filter="url(#glow)" opacity="0.8" />
        </svg>
        <div class="decor-bracket decor-left-1">{</div>
        <div class="decor-bracket decor-right-1">}</div>
        <div class="decor-bracket decor-left-2">{</div>
        <div class="decor-bracket decor-right-2">}</div>
        <div class="decor-bracket decor-parens">()</div>
        <div class="decor-arrow decor-arrow-1">=&gt;</div>
        <div class="decor-arrow decor-arrow-2">=&gt;</div>
    `;
    document.body.prepend(bgContainer);

    const authBtn = document.getElementById('authBtn');
    if (authBtn) {
        if (getToken()) {
            authBtn.textContent = 'Dashboard';
            authBtn.href = 'dashboard_v2.html';
        }
    }
});
