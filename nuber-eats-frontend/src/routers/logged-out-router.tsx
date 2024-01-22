import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  password: string;
}

export const LoggedOutRouter = () => {
  const { register, watch, handleSubmit } = useForm<IForm>();
  const onSubmit = () => {
    console.log(watch("email"));
  };
  const onInValid = () => {
    console.log("can't create account");
  };
  return (
    <div>
      <div>Logged Out</div>
      <form onSubmit={handleSubmit(onSubmit, onInValid)}>
        <div>
          <input
            {...register("email", {
              required: true,
              pattern: /^[A-Za-z0-9._%+-]+@gmail.com$/,
            })}
            name="email"
            type="email"
            required
            placeholder="email"
          />
        </div>
        <div>
          <input
            {...register("password", {
              required: true,
            })}
            name="password"
            type="password"
            required
            placeholder="password"
          />
        </div>
        <button className="bg-yellow-300 text-white">Click to login</button>
      </form>
    </div>
  );
};
