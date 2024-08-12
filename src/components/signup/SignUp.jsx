import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Spinner from "../shared/spinner/Spinner";

const Signup = () => {
  // state for showing password
  const userLoading = false;

  //   const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // state for handling input fields
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // get signup function from Authcontext

  // function for showing and hiding password

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = (event) => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = inputFields;
    

    // Add registration logic here

    // check for empty fields

    if (!name || !email || !password || !confirmPassword) {
      toast?.warn("Please fill all fields", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (password !== confirmPassword) {
      toast?.warn("Passwords do not match", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
  };

  return (
    <div className="h-screen items-center mb-36 pt-20 w-full mx-auto flex flex-wrap justify-center gap-10">
      {/* <div className="hidden  lg:inline-flex ">
        <Player
          autoplay
          className="xl:h-[40rem] w-full "
          loop
          src="https://lottie.host/aaeaf1c7-521a-43bc-9a71-744b7f9fd4f6/VP7YbbnUQO.json"
        ></Player>
      </div> */}
      <div className="w-full border max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <p className="text-2xl font-light">Signup </p>
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-md border focus:border-2 border-[#3e3e3e]"
              value={inputFields.name}
              onChange={(e) => setInputFields({ ...inputFields, name: e.target.value })}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-md border focus:border-2 border-[#3e3e3e]"
              value={inputFields.email}
              onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border focus:border-2 border-[#3e3e3e]"
              value={inputFields.password}
              onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
            />
            <div className="flex justify-end text-xs">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
            {
              // Show and hide password
              !showPassword ? (
                <span>
                  <IoMdEye
                    onClick={handleShowHidePassword}
                    className="text-2xl absolute right-3 top-9 cursor-pointer"
                  />
                </span>
              ) : (
                <span>
                  <IoEyeOff
                    onClick={handleShowHidePassword}
                    className="text-2xl absolute right-3 top-9 cursor-pointer"
                  />
                </span>
              )
            }
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="confirmPassword" className="block">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-md border focus:border-2 border-[#3e3e3e]"
              value={inputFields.confirmPassword}
              onChange={(e) => setInputFields({ ...inputFields, confirmPassword: e.target.value })}
            />
            {
              // Show and hide confirm password
              !showPassword ? (
                <span>
                  <IoMdEye
                    onClick={handleShowHidePassword}
                    className="text-2xl absolute right-3 top-9 cursor-pointer"
                  />
                </span>
              ) : (
                <span>
                  <IoEyeOff
                    onClick={handleShowHidePassword}
                    className="text-2xl absolute right-3 top-9 cursor-pointer"
                  />
                </span>
              )
            }
          </div>
          <button
           
            className="relative bg-white w-full disabled:text-slate-400  mx-auto flex items-center justify-center  gap-3 text-xl border-2 border-[#3e3e3e] transition-all duration-200 hover:scale-95 rounded-lg text-black px-6 py-3 hover:border-[#3d8ec7] cursor-pointer"
          >
            {userLoading ? <div className="absolute left-32 top-[0.95rem]">{/* <Spinner /> */}</div> : null}
            <span> Signup</span>
          </button>
        </form>
        {/* <SigninWithGoogle toastMessage={"Signup successfull"}>Signup With Google</SigninWithGoogle> */}
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link rel="noopener noreferrer" to={"/login"} className="underline dark:text-gray-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
