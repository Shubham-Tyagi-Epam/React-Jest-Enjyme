/**
 * Function that returns a node from the virtual DOM which enzymes uses for testing.
 * @function
 * @param {*} wrapper - the wrapper or the tree under which we need to find a particular node.
 * @param {*} attr - Selects the dom node on the basis of attribute
 * @returns - a node from DOM
 */

export function findByAttr(wrapper, attr) {
  return wrapper.find(`[data-test="${attr}"]`);
}
