/** @format */

"use client";

import Link from "next/link";
import { SIGNIN } from "@/constants/wording";
import { Input } from "@/components/ui";
import Button from "@/components/ui/button";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 🔹 Schema
const schema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Minimum 6 caractères")
});

type FormData = z.infer<typeof schema>;

const SigninPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (data: FormData) => {
    console.log("LOGIN DATA :", data);
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="shadow-three mx-auto max-w-[500px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
              {/* HEADER */}
              <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
                {SIGNIN.TITLE}
              </h3>
              <p className="mb-11 text-center text-base font-medium text-gray-600">
                {SIGNIN.SUBTITLE}
              </p>

              {/* FORM */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* EMAIL */}
                <div className="mb-8">
                  <label className="mb-3 block text-sm text-gray-700">
                    {SIGNIN.EMAIL_LABEL}
                  </label>

                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          type="email"
                          placeholder={SIGNIN.EMAIL_PLACEHOLDER}
                          dataState={errors.email ? "error" : "default"}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>

                {/* PASSWORD */}
                <div className="mb-8">
                  <label className="mb-3 block text-sm text-gray-700">
                    {SIGNIN.PASSWORD_LABEL}
                  </label>

                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          type="password"
                          placeholder={SIGNIN.PASSWORD_PLACEHOLDER}
                          dataState={errors.password ? "error" : "default"}
                        />
                        {errors.password && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.password.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>

                {/* REMEMBER + FORGOT */}
                <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
                  <div className="mb-4 sm:mb-0">
                    <label className="flex cursor-pointer items-center text-sm font-medium text-gray-600 select-none">
                      <div className="relative">
                        <Input type="checkbox" className="sr-only" />
                        <div className="mr-4 flex h-5 w-5 items-center justify-center rounded-sm border border-gray-300" />
                      </div>
                      {SIGNIN.REMEMBER}
                    </label>
                  </div>

                  <div>
                    <a className="text-sm font-medium text-blue-600 hover:underline">
                      {SIGNIN.FORGOT_PASSWORD}
                    </a>
                  </div>
                </div>

                {/* SUBMIT */}
                <div className="mb-6">
                  <Button
                    type="submit"
                    className="h-12 w-full justify-center px-6 text-base">
                    {SIGNIN.SIGNIN_BUTTON}
                  </Button>
                </div>
              </form>

              {/* DIVIDER */}
              <div className="mb-8 flex items-center justify-center">
                <div className="h-[2px] w-full max-w-[120px] bg-gray-200"></div>
                <p className="px-5 text-sm text-gray-500">{SIGNIN.OR}</p>
                <div className="h-[2px] w-full max-w-[120px] bg-gray-200"></div>
              </div>

              {/* SOCIAL */}
              <div className="flex justify-center gap-4">
                <button className="border-gray-200 text-body-color hover:border-blue-500 hover:bg-blue-500/5 hover:text-blue-500 mb-6 flex w-7 items-center justify-center rounded-full border bg-[#f8f8f8] px-6 p-3 text-base outline-hidden transition-all duration-300">
                  <span className="">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>

                <button className="border-gray-200 text-body-color hover:border-blue-500 hover:bg-blue-500/5 hover:text-blue-500 mb-6 flex w-7 items-center justify-center rounded-full border bg-[#f8f8f8] px-6 p-3 text-base outline-hidden transition-all duration-300">
                  <span className="">
                    <svg
                      fill="currentColor"
                      width="22"
                      height="22"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C52 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* FOOTER */}
              <p className="mt-2 text-center text-base text-gray-600">
                {SIGNIN.NO_ACCOUNT}{" "}
                <Link href="/signup" className="text-blue-500 hover:underline">
                  {SIGNIN.SIGNUP_LINK}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_95:1005"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969">
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="2"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="2"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default SigninPage;
