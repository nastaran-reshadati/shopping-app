"use server";

import { createFetch } from "@/utils/fetch";
import toast from "react-hot-toast";

async function CreateContact(state, formData) {
  const name = formData.get("subject");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const text = formData.get("text");

  console.log(name, email, subject, text);

  if (name === "" || email === "" || subject === "" || text === "") {
    return {
      status: "error",
      message: "وارد کردن تمامی فیلد ها الزامی است",
    };
  }
  const response = await createFetch("/contact-us", {
    name,
    email,
    subject,
    text,
  });

  console.log("response 26", response);
}

export { CreateContact };
