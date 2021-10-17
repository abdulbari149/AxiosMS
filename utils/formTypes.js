export function formTypes(keys) {
    const types = {};
    for (let key of keys) {
      if (key === "email") types[key] = "email";
      else if (key === "password") types[key] = "password";
      else if (key === "phoneNo") types[key] = "number";
      else if (key === "message") types[key] = "textarea";
      else types[key] = "text";
    }
    return types;
  }