import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useMutation from "../libs/useMutation";
interface LoginForm {
  email: string;
}
const Login = () => {
  const router = useRouter();
  const [login, { loading, data }] = useMutation("/api/login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onVaild = async (d: LoginForm) => {
    if (loading) return;
    await login(d);
    console.log(Boolean(data?.user));

    if (data?.user) {
      router.push("/");
    } else {
      alert(`Login Fail...`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onVaild)}>
        <h1>Login</h1>
        <div>
          <label>Email: </label>
          <input type="text" {...register("email", { required: true })} />
          {errors.email && <span>Please wirte down your email</span>}
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
