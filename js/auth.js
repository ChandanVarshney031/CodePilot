const authForm = document.getElementById('authForm');
const toggleModeBtn = document.getElementById('toggleMode');
const usernameGroup = document.getElementById('usernameGroup');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formTitle = document.getElementById('formTitle');
const formDesc = document.getElementById('formDesc');
const toggleQuestion = document.getElementById('toggleQuestion');
const errorMsg = document.getElementById('errorMsg');

let isLogin = true;

toggleModeBtn.addEventListener('click', () => {
    isLogin = !isLogin;
    if (isLogin) {
        formTitle.textContent = 'Sign In to CodePilot';
        formDesc.textContent = "Welcome back, let's keep that streak alive!";
        usernameGroup.classList.add('hidden');
        usernameInput.removeAttribute('required');
        toggleQuestion.textContent = "Don't have an account?";
        toggleModeBtn.textContent = 'Sign up';
    } else {
        formTitle.textContent = 'Create an Account';
        formDesc.textContent = "Start your coding journey with us.";
        usernameGroup.classList.remove('hidden');
        usernameInput.setAttribute('required', 'true');
        toggleQuestion.textContent = "Already have an account?";
        toggleModeBtn.textContent = 'Sign in';
    }
    errorMsg.classList.add('hidden');
});

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMsg.classList.add('hidden');

    const email = emailInput.value;
    const password = passwordInput.value;
    const payload = { email, password };

    if (!isLogin) {
        payload.username = usernameInput.value;
    }

    const endpoint = isLogin ? '/auth/login' : '/auth/register';

    try {
        const res = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('codepilot_token', data.token);
            localStorage.setItem('codepilot_user', JSON.stringify(data.user));
            window.location.href = '';
        } else {
            errorMsg.textContent = data.message || 'An error occurred';
            errorMsg.classList.remove('hidden');
        }
    } catch (err) {
        errorMsg.textContent = 'Unable to reach server. Please try again.';
        errorMsg.classList.remove('hidden');
    }
});
