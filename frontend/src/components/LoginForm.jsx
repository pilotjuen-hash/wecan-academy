import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      {/* Right Section */}
      <section className="form-section">
        <div className="login-container">
          <div className="mobile-logo">WCA</div>

          <h1>WECAN-ACADEMY</h1>

          <div className="heading">
            <h2>Sign in</h2>
            <p>
              Sign in to access your WECAN-ACADEMY community account
            </p>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email or Phone Number</label>

              <input
                type="text"
                id="email"
                name="email"
                placeholder="email@example.com or +254..."
                required
              />
            </div>

            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>
              </div>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="remember">
              <label>
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
            </div>

            <button type="submit">Sign in</button>
          </form>

          <p className="signup">
            Don't have an account?{" "}
            <Link to="/register">Sign up</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default LoginForm;