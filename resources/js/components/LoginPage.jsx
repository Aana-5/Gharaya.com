import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <div className="row gap-2">
        <div className="col">
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mt-4">
            <div>
              <Link to="/loginwithotp" className="text-decoration-none">
                <button type="button" className="btn btn-outline-success">Login with OTP</button>
              </Link>
            </div>
            <div>
              <Link to="/loginpage" className="text-decoration-none">
                <button type="button" className="btn btn-outline-success">Login with password</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card mx-auto mt-4 p-4 shadow-sm" style={{ maxWidth: '400px', borderRadius: '0.5rem' }}>
        <div className="mb-4 text-center">
          <h4 style={{ fontFamily: 'Candara' }}><strong>Login with Password!</strong></h4>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Mobile / Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter Your Mobile / Email" />
        </div>

        <div className="d-grid mb-3">
          <button type="button" className="btn btn-primary">Continue</button>
        </div>

        <p className="text-center mb-1" style={{ fontSize: '0.9rem' }}>
          Don’t have an account?{' '}
          <Link to="/registration" className="text-decoration-none text-primary">Register</Link>
        </p>

        <p className="text-center mb-0" style={{ fontSize: '0.9rem' }}>
          By continuing, you agree to{' '}
          <Link to="/privacypolicy" className="text-decoration-none text-primary">Gharaya's Privacy Policy</Link>
        </p>
      </div>
    </main>
  );
}
