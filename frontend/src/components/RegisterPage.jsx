import WelcomeRegister from "./WelcomeRegister";
import RegisterForm from "./RegisterForm.jsx";


import "./Register.css";


function RegisterPage() {
  return (
    <main className="register-page">
       <WelcomeRegister/> 
      <RegisterForm />
    </main>
  );
}

export default RegisterPage;