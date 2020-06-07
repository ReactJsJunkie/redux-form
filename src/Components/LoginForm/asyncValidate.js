const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const fields = ["email", "password"];

export const asyncValidate = async values => {
  return sleep(1000).then(() => {
    fields.forEach(field => {
      if (!values[field]) {
        throw { [field]: "Required" };
      }
    });
  });
};
