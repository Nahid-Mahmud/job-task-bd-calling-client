/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "./spinner/Spinner";
import { usePublicApi } from "../../hooks/usePublicApi";
import useAuth from "../../hooks/useAuth";

const SigninWithGoogle = ({ children, toastMessage }) => {
  const publicApi = usePublicApi();
  const { signinWithGoogle, googleLoading, setGoogleLoading } = useAuth();

  const navigate = useNavigate();

  // google signin

  const handleGoogleSignin = () => {
    signinWithGoogle()
      .then((user) => {
        // console.log("user", user);
        if (user) {
          publicApi
            .post("/users", {
              email: user?.user?.email,
              name: user?.user?.displayName,
              photoURL: user?.user?.photoURL,
            })
            .then((res) => {
              // console.log("User added to database");
              // console.log(res);
            })
            .catch((err) => {
              // console.log(err);
            });

          navigate("/");
          toast?.success(toastMessage, {
            position: "top-right",
            autoClose: 3000,
          });
        }
      })
      .catch((err) => {
        setGoogleLoading(false);
        toast?.error(err.message, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };
  return (
    <button
      onClick={handleGoogleSignin}
      aria-label="Login with Google"
      disabled={googleLoading}
      type="button"
      className="flex relative disabled:text-slate-400 transition-all duration-200 hover:scale-95 items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
      </svg>
      <div>
        {googleLoading ? (
          <div className="absolute left-16 top-[1.15rem]">
            <Spinner />
          </div>
        ) : null}
        {children}
      </div>
    </button>
  );
};

export default SigninWithGoogle;
