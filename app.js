// HELPERS FUNCTIONS --------------------------------------------------------------------------
import * as store from "./store.js";
const qs = (s) => document.querySelector(s);
const qsa = (s) => document.querySelectorAll(s);

store.init();

// DOM ---------------------------------------------------------------------------------------
const htmlDOM = qs("html");
const changeThemeBtnsDOM = qsa(".changeTheme");

// MODEL---------------------------------------------------------------------------------------
let model = store.get("model");

// UPDATE 1
const updateModel = (newModel) => (model = newModel);
const updateStorage = (newModel) => store.set("model", newModel);

// UPDATE 2 --------------------------------------------------------------------------------------

const renderTheme = (oldModel) => {
  if (oldModel.isDarkTheme === null) htmlDOM.dataset.theme = "none";
  else htmlDOM.dataset.theme = oldModel.isDarkTheme ? "dark" : "light";
};

const toggleTheme = (oldModel) => ({
  ...oldModel,
  isDarkTheme: !oldModel.isDarkTheme,
});

const update = () => {
  updateStorage(model);
  renderTheme(model);
};

// EVENTS -------------------------------------------------------------------------------------

const initThemeBtns = () => {
  changeThemeBtnsDOM.forEach((btn) => {
    btn.addEventListener("click", () => {
      const newModel = toggleTheme(model);
      updateModel(newModel);
      update();
    });
  });
};

// RUN APP ------------------------------------------------------------------------------------

const run = () => {
  update();
  initThemeBtns();
};

run();
