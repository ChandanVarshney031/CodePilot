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
        <div class="bg-code-block code-top-left">
            <span class="syntax-keyword">function</span> <span class="syntax-def">app</span>() {<br>
            &nbsp;&nbsp;<span class="syntax-keyword">for</span> (<span class="syntax-keyword">let</span> i = <span class="syntax-number">0</span>; i &lt; <span class="syntax-number">30</span>; i++) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="syntax-keyword">let</span> res = [];<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="syntax-keyword">return</span> res + <span class="syntax-string">'con'</span>;<br>
            &nbsp;&nbsp;}<br>
            }
        </div>
        <div class="bg-code-block code-top-right">
            <span class="syntax-keyword">function</span> <span class="syntax-def">run</span>() {<br>
            &nbsp;&nbsp;<span class="syntax-keyword">const</span> db = <span class="syntax-keyword">new</span> <span class="syntax-def">Database</span>();<br>
            &nbsp;&nbsp;<span class="syntax-keyword">for</span> (<span class="syntax-keyword">let</span> i = <span class="syntax-number">0</span>; i &lt; <span class="syntax-number">5</span>; i++) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="syntax-keyword">if</span> (i === <span class="syntax-number">1</span>) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.<span class="syntax-def">log</span>(<span class="syntax-string">"Loading..."</span>);<br>
            &nbsp;&nbsp;&nbsp;&nbsp;}<br>
            &nbsp;&nbsp;}<br>
            }
        </div>
        <div class="bg-code-block code-bottom-left">
            <span class="syntax-keyword">for</span> (<span class="syntax-keyword">let</span> s = <span class="syntax-number">0</span>; s &lt; limit; s++) {<br>
            &nbsp;&nbsp;<span class="syntax-keyword">let</span> active = <span class="syntax-number">true</span>;<br>
            &nbsp;&nbsp;console.<span class="syntax-def">log</span>(<span class="syntax-string">"CodePilot connected"</span>);<br>
            }
        </div>
        <div class="bg-code-block code-bottom-right">
            <span class="syntax-keyword">if</span> (user.<span class="syntax-def">isLoggedIn</span>()) {<br>
            &nbsp;&nbsp;session.<span class="syntax-def">start</span>();<br>
            &nbsp;&nbsp;<span class="syntax-def">loadDashboard</span>();<br>
            }
        </div>
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
