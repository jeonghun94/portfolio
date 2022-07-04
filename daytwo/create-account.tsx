import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import useMutation from "../libs/useMutation";

interface CreateForm {
  name: string;
  email: string;
}

const CreateAccount: NextPage = () => {
  const router = useRouter();
  const [create, { loading, data, error }] = useMutation("/api/create");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateForm>();

  const onVaild = (d: CreateForm) => {
    if (loading) return;
    create(d);
    console.log(data);
    if (!data.ok) {
      alert(`Crate Fail...\n${data.msg}`);
    } else {
      alert("Account Created! Please Log in!");
      router.push("/log-in");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onVaild)}>
        <h1>Create Account</h1>
        <div>
          <label>Name: </label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>Please wirte down your name</span>}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Please wirte down your email",
              },
              validate: {
                mailCheck: (value) =>
                  value.includes("@naver.com") || "Only naver mail allowd",
              },
            })}
          />
          {errors.email?.message}
        </div>
        <button>Create Account{loading}</button>
      </form>
    </div>
  );
};

export default CreateAccount;
