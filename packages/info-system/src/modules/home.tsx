import { useAuth } from 'oidc-react';
const Login = () => {
    const auth = useAuth();
    // auth.signIn();
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => auth.signIn()}>Login</button>
        </div>
      );
}

export default Login;