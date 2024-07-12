export const getFetch = async (url) => {
  const res = await fetch(`${process.env.BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  if (res.ok) {
    return await res.json();
  }
  console.log(await res.json());
  //   return await res.json();
};
