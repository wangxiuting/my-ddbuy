export const setLocalStorage = (name, val) => {
  if (!name) {
    return;
  }
  if (typeof val !== "string") {
    val = JSON.stringify(val);
  }
  window.localStorage.setItem(name, val);
};
