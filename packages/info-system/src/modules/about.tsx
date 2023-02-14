import { useAuth } from 'oidc-react';

const About = () => {
    const {userData} = useAuth();
    return (
        <div>
            <h1>About</h1>
            {userData?.profile && (<p>Hello, {userData.profile.name}</p>)}
            <div style={{
                textAlign: 'left',
                fontSize: '10px',
                width: '1000px',
                overflow: 'hidden',
                margin: '0 auto',
            }}>
                <pre>
                    {JSON.stringify(userData, undefined, 2)}
                </pre>
            </div>
        </div>
    )
}

export default About