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
export const createFetch = async (url, body) => {
  const res = await fetch(`${process.env.BASE_URL}${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  if (res.ok) {
    return await res.json();
  } else {
    console.log(res);
  }
  //   return await res.json();
};
