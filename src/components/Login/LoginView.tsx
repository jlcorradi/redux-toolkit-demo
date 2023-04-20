import React, { SyntheticEvent } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { Credentials } from "../../redux/authSlice";
import { authenticateUser } from "../../redux/authSlice";
import GA4 from "react-ga4";

const LoginView: React.FC<{}> = () => {
  const { isLoggedIn, error, isLoading } = useAppSelector((state: RootState) => state.auth);
  const [credentials, setCredentials] = React.useState<Credentials>({
    username: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  function login(e: SyntheticEvent) {
    e.preventDefault();
    if (!credentials.username) {
      alert("username is required");
      return;
    }

    GA4._gaCommandSendTiming

    if (!credentials.password) {
      alert("password is required");
      return;
    }

    dispatch(authenticateUser(credentials));
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  w-96"
        onSubmit={login}
      >
        <h1 className="mb-4 text-center text-2xl font-bold">Log in</h1>
        {error && <div className="p-4 bg-red-200 mb-4 rounded-md">Unable to login. Please, verify username/password</div>}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="btn"
            type="submit"
            disabled={isLoading}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginView;
