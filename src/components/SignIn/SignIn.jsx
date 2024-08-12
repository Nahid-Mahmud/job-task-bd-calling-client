import { IoEyeOff } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../shared/spinner/Spinner";
import useAuth from "../../hooks/useAuth";
import SigninWithGoogle from "../shared/SignInWithGoogle";

const SignIn = () => {
  // state for showing password
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { signinUser } = useAuth();

  const [userLoading, setUserLoading] = useState(false);

  //   state for handeling input fields

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle login
  const handleLogin = (event) => {
    event.preventDefault();

    setUserLoading(true);

    const { email, password } = inputFields;

    // check for empty fields
    if (!email || !password) {
      toast?.warn("Please fill all fields", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Add login logic here
    signinUser(email, password)
      .then((currentUser) => {
        setUserLoading(false);
        if (currentUser) {
          navigate("/");
          toast?.success("User logged in successfully", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      })
      .catch((err) => {
        setUserLoading(false);
        toast?.error(err.message, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div className=" my-20 items-center flex flex-wrap flex-row-reverse justify-center gap-10">
      {/* lttie animation */}
      <div className="w-full  border  max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        {/* <h1 className="text-2xl font-bold text-center">Login</h1> */}
        <p className="text-2xl font-light">Welcome </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="Email" className="block">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-md border focus:border-2 border-[#3e3e3e]"
              value={inputFields.email}
              onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block ">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border focus:border-2 border-[#3e3e3e] "
              value={inputFields.password}
              onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
            />
            <div className="flex justify-end text-xs ">
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
          <button
            disabled={userLoading}
            className="bg-white disabled:text-slate-400 relative  w-full mx-auto text-xl border-2 border-[#3e3e3e] transition-all duration-200 hover:scale-95  rounded-lg text-black px-6 py-3  hover:border-[#3d8ec7] cursor-pointer "
          >
            {userLoading ? (
              <div className="absolute left-32 top-[0.95rem]">
                <Spinner />
              </div>
            ) : null}
            Login
          </button>
        </form>
        {/* google sign in */}

        <SigninWithGoogle toastMessage={"Login successfull"}>Signin With Google</SigninWithGoogle>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don&apos;t have an account?{" "}
          <Link rel="noopener noreferrer" to={"/signUp"} className="underline dark:text-gray-800">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
