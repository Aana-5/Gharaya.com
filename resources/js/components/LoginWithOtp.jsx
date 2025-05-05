import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginWithOtp() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <div className="row gap-2">
        <div className="col">
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
            <Link className="text-decoration-none" to="/loginwithotp">
              <button type="button" className="btn btn-outline-success">Login with OTP</button>
            </Link>
            <Link className="text-decoration-none" to="/loginpage">
              <button type="button" className="btn btn-outline-success">Login with password</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="card shadow-sm mx-auto p-4" style={{ maxWidth: '400px', borderRadius: '0.5rem' }}>
          <div className="mb-3 text-center">
            <h4 style={{ fontFamily: 'Candara' }}><b>Login with OTP</b></h4>
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Mobile"
              name="email"
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary w-100 mt-1">Get OTP</button>
          </div>
          <div className="text-center small">
            Don’t have an account?{' '}
            <Link to="/registration" className="text-primary text-decoration-underline">Register</Link>
          </div>
          <div className="text-center small mt-2">
            By continuing, you agree to{' '}
            <Link to="/privacypolicy" className="text-primary text-decoration-underline">Gharaya's Privacy Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
