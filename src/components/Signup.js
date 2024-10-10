import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          username: username,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const responseData = await response.json();
      if (responseData.message === "User already exists") {
        throw new Error("User already exists.");
      }
      //onLogin(username); // Pass the token and username to the parent
      navigate("/"); // Redirect to home after successful login
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up and access our features
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && (
          <div className="flex w-full justify-center">
            <span className="text-red-500">User already exists!</span>
          </div>
        )}
        <form class="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              for="name"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div class="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div class="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autocomplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
