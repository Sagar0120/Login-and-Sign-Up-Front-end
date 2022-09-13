import React, { useState } from "react";
export default function Login() {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <section>
      <form>
        <h5>Sign In</h5>
        <div>
          <label>Phone Number</label>
          <div>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <button type="submit" onClick={Login}>
          Sign in
        </button>
      </form>
      </section>
    </div>
  );
}
