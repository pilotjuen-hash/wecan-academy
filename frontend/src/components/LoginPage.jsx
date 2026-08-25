import WelcomeLogin from "./Welcomelogin";
import LoginForm from "./LoginForm";


import "./LoginPage.css";


function LoginPage() {
  return (
    <main className="login-page">
       <WelcomeLogin/> 
      <LoginForm />
    </main>
  );
}

export default LoginPage;