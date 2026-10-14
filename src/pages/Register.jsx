import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Navbar from "../components/common/Navbar";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import api from "../api/axios";
import { toast } from "../components/ui/toast";

// Form validation
const schema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await api.post("/auth/register", data);

      if (response.status == 201) {
        toast.add({ title: "Account created sucessfully!" });
        navigate("/login");
      } else {
        toast.add({ title: "Could not create your account." });
      }
    } catch (error) {
      console.log(error.message);
      toast.add({ title: error.message || "some error occured" });
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />

      <div className="flex justify-center px-4 py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-4 rounded-2xl bg-white p-8 shadow-lg"
        >
          <h1 className="text-3xl font-bold">Create an account</h1>

          {/* Name */}
          <div>
            <label>Full Name</label>
            <Input placeholder="John Doe" {...register("name")} />
            <p className="text-sm text-red-500">{errors.name?.message}</p>
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <Input placeholder="abc@gmail.com" {...register("email")} />
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password")}
            />
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label>Confirm Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              {...register("confirmPassword")}
            />
            <p className="text-sm text-red-500">
              {errors.confirmPassword?.message}
            </p>
          </div>

          {/* Show password */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show password
          </label>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => reset()}
              className="flex-1"
            >
              Clear
            </Button>

            <Button type="submit" className="flex-1">
              Register
            </Button>
          </div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
