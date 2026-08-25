import { Link } from "react-router-dom";
function RegisterForm(){
    return ( 
        
  <>
  {/* RIGHT SIDE */}
  <section className="Register-form-section">
    <div className="Register-form-container">
      <div className="Register-form-logo">WCA</div>
      <h2>WeCan Academy</h2>
      <h1>Create an account</h1>
      <p className="Register-subtitle">Enter your information to get started</p>
      <form>
        {/* Full Name */}
        <div className="Register-form-group">
          <label htmlFor="fullname">
            Full Name <span>*</span>
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="John Doe"
            required=""
          />
        </div>
        {/* Email */}
        <div className="Register-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
          />
        </div>
        {/* Phone */}
        <div className="Register-form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+254..." />
          <small>Provide either email or phone number</small>
        </div>
        {/* Password */}
        <div className="Register-form-group">
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a strong password"
            required=""
          />
        </div>
        {/* Confirm Password */}
        <div className="Register-form-group">
          <label htmlFor="confirm-password">
            Confirm Password <span>*</span>
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Re-enter your password"
            required=""
          />
        </div>
        {/* Terms */}
        <div className="Register-terms">
          <input type="checkbox" id="terms" required="" />
          <label htmlFor="terms">
            I agree to the
            <a href="#">Terms and Conditions</a>
          </label>
        </div>
        {/* Submit */}
        <button type="submit">Create account</button>
      </form>
      {/* Login */}


      <p className="Register-login-text">
  Already have an account?{" "}
  <Link to="/login">Sign in</Link>
</p>

      {/* Home */}
      <a href="#" className="Register-back-home">
        ← Back to Home
      </a>
    </div>
  </section>
</>





  );
}

export default RegisterForm