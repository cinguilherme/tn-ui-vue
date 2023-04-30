export async function authenticate(username, password) {
  try {
    const response = await fetch('http://localhost:3000/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      return { success: true };
    } else {
      return { success: false, error: 'Invalid username or password' };
    }
  } catch (error) {
    console.info('Error during login:', error);
    return { success: false, error: 'An error occurred. Please try again' };
  }
}
