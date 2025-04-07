// Check if user is logged in (simple session check)
document.addEventListener('DOMContentLoaded', function() {
    // Redirect to dashboard if already logged in
    if (localStorage.getItem('loggedIn') === 'true' && !window.location.pathname.includes('dashboard.html')) {
        window.location.href = 'dashboard.html';
    }
    
    // Login form handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (email && password) {
                // In a real app, you would send this to a server
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('userEmail', email);
                window.location.href = 'dashboard.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }
    
    // Signup form handler
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Simple validation
            if (!name || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // In a real app, you would send this to a server
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', name);
            window.location.href = 'dashboard.html';
        });
    }
    
    // Logout handler
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            window.location.href = 'index.html';
        });
    }
    
    // Protect dashboard route
    if (window.location.pathname.includes('dashboard.html')) {
        if (localStorage.getItem('loggedIn') !== 'true') {
            window.location.href = 'login.html';
        } else {
            // Display welcome message if available
            const userName = localStorage.getItem('userName');
            if (userName) {
                const welcomeHeading = document.querySelector('.dashboard h2');
                if (welcomeHeading) {
                    welcomeHeading.textContent = `Welcome to Your Dashboard, ${userName}`;
                }
            }
        }
    }
});