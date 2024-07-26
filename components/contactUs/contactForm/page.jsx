import React from "react";

const ContactForm = () => {
  return (
    <div className="">
      <form className="space-y-4" action="">
        <div>
          <input
            placeholder="نام و نام خانوادگی"
            type="text"
            id="large-input"
            className="block w-full px-4 py-3 text-gray-900 font-Dana border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="ایمیل"
            className="block w-full px-4 py-3 text-gray-900 font-Dana border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="موضوع پیام"
            className="block w-full px-4 py-3 text-gray-900 font-Dana border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <textarea
            rows={"5"}
            name=""
            id=""
            placeholder="متن پیام"
            className="block w-full px-4 py-3 text-gray-900 font-Dana border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full font-Dana text-base text-wh bg-blue-600 p-4 rounded-lg"
        >
          ارسال پیام
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
