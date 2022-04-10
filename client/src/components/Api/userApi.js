const setUser = async (payload) => {
  const result = await fetch(`http://localhost:1337/api/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return await result.json();
};

const checkUser = async (payload) => {
  const result = await fetch(`http://localhost:1337/api/user/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await result.json();
};

export { setUser };
export { checkUser };
