import axios from "axios";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";

const ChangePass = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/password-reset/confirm/",
      data
    );
    if (res.data.status) {
      alert("Successfull");
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">New password</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-96 mx-auto shadow-sm p-2"
      >
        {/* password */}
        <div className="flex flex-col space-y-2 mt-2">
          <label className="text-xl font-semibold">New password</label>
          <input
            className="border p-2 rounded-sm"
            type="password"
            placeholder="password"
            {...register("password")}
          />
        </div>
        {/* email */}
        <div className="flex flex-col space-y-2 mt-2">
          <label className="text-xl font-semibold">Token</label>
          <input
            className="border p-2 rounded-sm"
            value={token}
            type="text"
            placeholder="token"
            {...register("token")}
          />
        </div>

        <input
          className="w-full bg-amber-500 text-black text-center"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ChangePass;
