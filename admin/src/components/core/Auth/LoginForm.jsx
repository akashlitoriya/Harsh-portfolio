import React from "react";
import { useForm } from "react-hook-form";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { login } from "../../../services/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleFormSubmit = (data) => {
    dispatch(login(data, navigate));
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full flex flex-col gap-6 mt-6 text-white text-lg tracking-wider"
    >

      <input
        type="email"
        id="email"
        placeholder="Enter Email"
        {...register("email", { required: "Email is required" })}
        className=" py-3 px-6 focus:outline-none border-2 border-cream_primary bg-secondary_background text-lg rounded-full"
      />


      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter Password"
          {...register("password", { required: "Password is required" })}
          className="w-full py-3 px-6  focus:outline-none border-2 border-cream_primary bg-secondary_background text-lg rounded-full"
        />
        <button
          type="button"
          className="absolute right-5 bottom-5 text-cream_primary"
          onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <IoEyeOff /> : <IoEye />}
        </button>
      </div>

      <button type="submit" className="w-full px-4 py-2 rounded-lg bg-cyan_primary transition-all duration-200 hover:scale-105">Login</button>
    </form>
  );
};

export default LoginForm;
