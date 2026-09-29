import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import AuthLayout from "../components/auth/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout
      heading="Sign in with ease"
      subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      illustration="/signinout.png"
    >
      <div>
        <p className="text-b-xs sm:text-b-s text-primary-600 font-medium">
          Sign In
        </p>
        <h2 className="text-h-xs md:text-h-s font-heading font-semibold text-neutral-950 mt-1">
          Welcome Back
        </h2>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-5 md:mt-6 space-y-4 md:space-y-5"
      >
        <div>
          <label className="text-b-xs sm:text-b-s text-neutral-700">
            Email
          </label>
          <input
            type="email"
            placeholder="designer@example.com"
            className="mt-2 w-full rounded-lg border border-neutral-200 px-3.5 sm:px-4 py-2.5 sm:py-3 text-b-xs sm:text-b-s text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-primary-500 transition-colors"
          />
        </div>

        <div>
          <label className="text-b-xs sm:text-b-s text-neutral-700">
            Password
          </label>
          <input
            type="password"
            placeholder="*********"
            className="mt-2 w-full rounded-lg border border-neutral-200 px-3.5 sm:px-4 py-2.5 sm:py-3 text-b-xs sm:text-b-s text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-primary-500 transition-colors"
          />
        </div>

        <div className="flex justify-end pt-1">
          <button
            type="submit"
            className="rounded-full bg-secondary-400 px-6 sm:px-7 py-2.5 sm:py-3 text-b-xs sm:text-b-s font-medium text-neutral-950 hover:bg-secondary-300 transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="flex items-center gap-3 my-5 md:my-7">
        <div className="flex-1 h-px bg-neutral-200" />
        <span className="text-b-xs text-neutral-400">or</span>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      <div className="flex items-center justify-center gap-3 md:gap-4">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 hover:border-neutral-400 transition-colors cursor-pointer"
        >
          <FaFacebookF size={16} />
        </button>
        <button
          type="button"
          aria-label="Sign in with Google"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 hover:border-neutral-400 transition-colors cursor-pointer"
        >
          <FaGoogle size={16} />
        </button>
      </div>

      <p className="text-b-xs sm:text-b-s text-neutral-500 text-center mt-5 md:mt-7">
        New user?{" "}
        <Link
          to="/signup"
          className="text-primary-600 hover:underline font-medium"
        >
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignIn;