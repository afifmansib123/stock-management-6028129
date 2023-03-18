import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

const Login = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (response.ok) {
        setError('You Are Registered');
    } else {
      setError('You Are Not Registered Yet');
    }
  }

  return (
    <>
      <Head>
        <title>Varify</title>
      </Head>
      <h1>Enter Your Name and Adress to see if youre a registered supplier yet!</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={credentials.name} onChange={(event) => setCredentials({ ...credentials, name: event.target.value })} />
        </label>
        <label>
          Password:
          <input type="password" value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} />
        </label>
        <Button variant="primary" type="submit">Varify</Button>
      </form>
    </>
  );
}

export default Login;