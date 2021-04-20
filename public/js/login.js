// referenced group project
// login
const loginHandler = async (e) => {
  e.preventDefault();
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  if (email && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
          document.location.replace('/');
      }
  }
};

// signup
const signupFormHandler = async (e) => {
  e.preventDefault();
  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (username && email && password) {
      const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
          document.location.replace('/');
      } else {
          console.log(response.statusText);
      }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
