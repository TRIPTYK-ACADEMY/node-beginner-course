/**
 *
 * @param {Element} element
 * @param {*} target
 */
function count(element, target) {
  const img = document.querySelector("#" + target);
  const value = parseFloat(element.getAttribute("value") ?? 0.025);
  element.setAttribute("value", value + 0.25);

  img.setAttribute("style", `flex-grow : ${value + 0.25}`);
}
