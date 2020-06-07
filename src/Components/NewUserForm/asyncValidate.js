const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const fields = ["username", "email", "password", "confirmpass"];

export const asyncValidate = async values => {
  return sleep(1000).then(() => {
    fields.forEach(field => {
      if (!values[field]) {
        throw { [field]: "Required" };
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        throw { email: "Invalid email address" };
      } else if (values.password !== values.confirmpass) {
        throw {
          password: "These do not match",
          confirmpass: "These do not match"
        };
      }
    });
  });
};
