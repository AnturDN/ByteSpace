import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout
      heading="Sign up and come in"
      subtitle="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      illustration="/signinout.png"
    >
      <div>
        <p className="text-b-xs sm:text-b-s text-primary-600 font-medium">
          Create an Account
        </p>
        <h2 className="text-h-xs md:text-h-s font-heading font-semibold text-neutral-950 mt-1">
          Welcome to ByteSpace
        </h2>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-5 md:mt-6 space-y-4 md:space-y-5"
      >
        <div>
          <label className="text-b-xs sm:text-b-s text-neutral-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Jamie Davis"
            className="mt-2 w-full rounded-lg border border-neutral-200 px-3.5 sm:px-4 py-2.5 sm:py-3 text-b-xs sm:text-b-s text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-primary-500 transition-colors"
          />
        </div>

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
            Continue
          </button>
        </div>
      </form>

      <p className="text-b-xs sm:text-b-s text-neutral-500 text-center mt-5 md:mt-7">
        Already have an account?{" "}
        <Link
          to="/signin"
          className="text-primary-600 hover:underline font-medium"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUp;