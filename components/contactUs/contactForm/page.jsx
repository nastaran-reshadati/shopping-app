"use client";

import { CreateContact } from "@/actions/contact";
import SubmitButton from "@/components/submitButton/page";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [state, formAction] = useFormState(CreateContact, {});

  const notify = () => toast("Here is your toast.");

  useEffect(() => {
    if (state.status === "error") {
      toast.error(<div className="font-DanaMedium">{state.message}</div>);
    }
  }, [state]);

  return (
    <form className="space-y-4" action={formAction}>
      <div>
        <input
          placeholder="نام و نام خانوادگی"
          name="name"
          type="text"
          id="large-input"
          className="block w-full px-4 py-3 text-gray-900 font-Dana border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="ایمیل"
          className="block w-full px-4 py-3 text-gray-900 font-Dana border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          placeholder="موضوع پیام"
          className="block w-full px-4 py-3 text-gray-900 font-Dana border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <textarea
          rows={"5"}
          name="text"
          id=""
          placeholder="متن پیام"
          className="block w-full px-4 py-3 text-gray-900 font-Dana border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      </div>

      {state && (
        <div className="text-red-600 font-DanaMedium text-l">
          {state.message}
        </div>
      )}
      <SubmitButton title={"ارسال پیام"} />
      <button onClick={notify}>Make me a toast</button>
    </form>
  );
};

export default ContactForm;
