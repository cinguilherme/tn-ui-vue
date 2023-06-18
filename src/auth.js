const baseUrl = process.env.TN_API_URL || 'http://localhost:3000';

export async function authenticate(username, password) {
  try {
    const response = await fetch(baseUrl + '/v1/users/login', {
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

      const user = await fetch(baseUrl + '/v1/users/' + data.userId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + data.token,
        }
      });

      const userData = await user.json();
      console.log(userData);
      return { success: true, user: userData };
    } else {
      return { success: false, error: 'Invalid username or password' };
    }
  } catch (error) {
    console.info('Error during login:', error);
    return { success: false, error: 'An error occurred. Please try again' };
  }
}
