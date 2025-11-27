import { hideLoading, showLoading } from "../redux/alertsSlice";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ApplyLawyer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const onSubmit = async (data) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:5000/api/user/apply-lawyer-account",
        {
          ...data,
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("مشکلی رخ داده است!");
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="font-bold text-xl text-slate-600">درخواست وکیل شدن</h2>
        <p className="text-sm text-gray-400 mt-3 font-semibold">در این بخش می توانید با پر کردن فرم زیر اکانت عادی خود را به اکانت وکیل تبدیل کنید و رزو موکلان را مدیریت کنید!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-lg font-medium text-gray-500 my-5 border-b pb-3">اطلاعات عمومی</h2>
        <div className="mx-auto grid lg:grid-cols-[1fr_1fr] gap-5">
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              نام
            </label>
            <input
              id="firstname"
              placeholder="نام"
              type="text"
              className={`border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.firstname ? "border-red-500" : "border-gray-300"
              }`}
              {...register("firstname", { required: "باید یک نام وارد کنید!" })}
            />
            {errors.firstname && (
              <span className="text-red-500 text-xs font-medium mt-1">
                {errors.firstname.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              نام خانوادگی
            </label>
            <input
              id="lastname"
              placeholder="نام خانوادگی"
              type="text"
              className={`border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.lastname ? "border-red-500" : "border-gray-300"
              }`}
              {...register("lastname", {
                required: "باید یک نام خانوادگی وارد کنید!",
              })}
            />
            {errors.lastname && (
              <span className="text-red-500 text-xs font-medium mt-1">
                {errors.lastname.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              سایت شخصی
            </label>
            <input
              id="website"
              placeholder="سایت شخصی"
              type="text"
              className={`border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.website ? "border-red-500" : "border-gray-300"
              }`}
              {...register("website")}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              تلفن
            </label>
            <input
              id="phone"
              placeholder="09"
              type="text"
              className={`border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phone", {
                required: "باید یک شماره تلفن معتبر با 09 وارد کنید!",
                pattern: /^09\d{9}$/,
              })}
            />
            {errors.phone && (
              <span className="text-red-500 text-xs font-medium mt-1">
                {" "}
                {errors.phone.message}{" "}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              آدرس
            </label>
            <textarea
              id="address"
              placeholder="آدرس"
              className={`border w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              {...register("address", { required: "باید یک آدرس وارد کنید!" })}
            ></textarea>
            {errors.address && (
              <span className="text-red-500 text-xs font-medium mt-1">
                {errors.address.message}
              </span>
            )}
          </div>
        </div>
        <h2 className="text-lg font-medium text-gray-500 my-5 border-b pb-3">اطلاعات تخصصی</h2>
        {/* <div className="mx-auto grid lg:grid-cols-[1fr_1fr] gap-5">
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              نام
            </label>
            <input
              id="firstname"
              placeholder="نام"
              type="text"
              className={`border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.firstname ? "border-red-500" : "border-gray-300"
              }`}
              {...register("firstname", { required: "باید یک نام وارد کنید!" })}
            />
            {errors.firstname && (
              <span className="text-red-500 text-xs font-medium mt-1">
                {errors.firstname.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              نام خانوادگی
            </label>
            <input
              id="lastname"
              placeholder="نام خانوادگی"
              type="text"
              className={`border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.lastname ? "border-red-500" : "border-gray-300"
              }`}
              {...register("lastname", {
                required: "باید یک نام خانوادگی وارد کنید!",
              })}
            />
            {errors.lastname && (
              <span className="text-red-500 text-xs font-medium mt-1">
                {errors.lastname.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              سایت شخصی
            </label>
            <input
              id="website"
              placeholder="سایت شخصی"
              type="text"
              className={`border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.website ? "border-red-500" : "border-gray-300"
              }`}
              {...register("website")}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              تلفن
            </label>
            <input
              id="phone"
              placeholder="09"
              type="text"
              className={`border h-12 w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phone", {
                required: "باید یک شماره تلفن معتبر با 09 وارد کنید!",
                pattern: /^09\d{9}$/,
              })}
            />
            {errors.phone && (
              <span className="text-red-500 text-xs font-medium mt-1">
                {" "}
                {errors.phone.message}{" "}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              آدرس
            </label>
            <textarea
              id="address"
              placeholder="آدرس"
              className={`border w-full py-2 outline-none focus:border-[#F6A602] rounded-md px-2 font-normal ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              {...register("address", { required: "باید یک آدرس وارد کنید!" })}
            ></textarea>
            {errors.address && (
              <span className="text-red-500 text-xs font-medium mt-1">
                {errors.address.message}
              </span>
            )}
          </div>
        </div> */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyLawyer;
