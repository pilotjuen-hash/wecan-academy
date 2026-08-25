import "./Register.css";

function RegisterForm(){
    return ( 
        
  <>
  {/* RIGHT SIDE */}
  <section className="form-section">
    <div className="form-container">
      <div className="form-logo">WCA</div>
      <h2>WeCan Academy</h2>
      <h1>Create an account</h1>
      <p className="subtitle">Enter your information to get started</p>
      <form>
        {/* Full Name */}
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
          />
        </div>
        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+254..." />
          <small>Provide either email or phone number</small>
        </div>
        {/* Password */}
        <div className="form-group">
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
        <div className="form-group">
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
        <div className="terms">
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
      <p className="login-text">
        Already have an account?
        <a href="login.html">Sign in</a>
      </p>
      {/* Home */}
      <a href="#" className="back-home">
        ← Back to Home
      </a>
    </div>
  </section>
</>





  );
}

export default RegisterForm