"use server";

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
}

export { CreateContact };
