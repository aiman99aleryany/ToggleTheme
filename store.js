const INIT_MODEL = {
  isDarkTheme: null, // Boolean true or false or null
};

const set = (key, item) => {
  try {
    const jsonItem = JSON.stringify(item);
    localStorage.setItem(key, jsonItem);
  } catch (e) {
    console.log(e.message);
  }
};

const get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.log(e.message);
  }
};

const init = () => {
  if (!get("model")) set("model", INIT_MODEL);
};

export { set, get, init };
