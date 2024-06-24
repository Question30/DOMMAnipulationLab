function buildSubmenu(array, element) {
  element.innerHTML = "";
  array.forEach((link) => {
    let aEl = document.createElement("a");
    aEl.setAttribute("href", link.href);
    aEl.innerHTML = `${link.text}`;
    element.append(aEl);
  });
}

export { buildSubmenu };
