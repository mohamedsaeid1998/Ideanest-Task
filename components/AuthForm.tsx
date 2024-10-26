"use client";
import TextField, { PasswordInput } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { IAuthentication } from "@/interFaces";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "@/utils/validation";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import { useEffect } from "react";
// import CookieServices from "@/utils/cookieServices/CookieServices";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AuthForm = () => {
  const pathname = usePathname();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<IAuthentication>({
    resolver: yupResolver(pathname === "/login" ? loginSchema : registerSchema),
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, [router]);

  const handleLogin = (data: IAuthentication) => {
    const { email, password } = data;
    if (pathname === "/login") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Welcome");
        })
        .catch(() => {
          toast.error("Invalid-Email OR Password");
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Welcome");
        })
        .catch((error) => {
          toast.error(error.code);
        });
    }
  };

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="w-[500px] p-7 text-white bg-black dark:text-black dark:bg-white gap-4 rounded-xl">
        <h2 className="flex justify-center text-3xl tracking-wider font-bold">
          {pathname === "/login" ? "Login Page" : "Register Page"}
        </h2>

        <form className="pt-6 " onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col  w-full items-center gap-4 mb-6 ">
            <TextField
              label="Email"
              {...register("email")}
              error={errors?.email?.message}
              placeholder="Type your email"
              startIcon={<Pencil size={20} className="shrink-0" />}
              className="w-full"
            />
            <PasswordInput
              label="Password"
              {...register("password")}
              error={errors?.password?.message}
              placeholder="Type your password"
              className="w-full"
            />
          </div>
          <span className="text-sm ">
            {pathname === "/login"
              ? "Not a member yet ?"
              : "Already a member ?"}{" "}
            <Link
              href={pathname === "/login" ? "/register" : "/login"}
              className="text-blue-700 font-bold"
            >
              {pathname === "/login" ? "Create Account" : "Login here"}
            </Link>
          </span>
          <Button
            className="mt-1"
            variant={"secondary"}
            disabled={isLoading}
            isLoading={isLoading}
            loadingText={"Checking"}
            fullWidth
          >
            {pathname === "/login" ? "Login" : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
