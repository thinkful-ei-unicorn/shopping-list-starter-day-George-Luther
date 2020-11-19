/* eslint-disable semi */
function validateName (name) {
  if (name === undefined || name === '') {
    throw new TypeError('Name must not be blank')
  }
}
function create (Name) {
  return {
    id: cuid(),
    name: Name,
    checked: false
  }
}
export default {
  validateName,
  create
};