import React from "react";
import { useForm } from "react-hook-form";
import { IoEyeOff, IoEye } from "react-icons/io5";
const LoginForm = () => {
  const {register,handleSubmit,formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-6 mt-6 text-white text-lg tracking-wider"
    >
      <div className="flex justify-between items-end">
        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
          className="w-2/3 bg-text_secondary py-3 px-4 border-b-4 border-blue_primary focus:outline-none"
        />
        
      </div>
      <div className="flex justify-between items-end relative">
        <label htmlFor="password">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          {...register("password", { required: "Password is required" })}
          className="w-2/3 bg-text_secondary py-3 px-4 border-b-4 border-blue_primary focus:outline-none"
        />
        <button
          type="button"
          className="absolute right-0 bottom-5 text-blue_primary"
          onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEyeOff /> : <IoEye/>}
          </button>
      </div>

      <button type="submit" className="w-full px-4 py-2 rounded-lg bg-blue_primary transition-all duration-200 hover:scale-105">Login</button>
    </form>
  );
};

export default LoginForm;
