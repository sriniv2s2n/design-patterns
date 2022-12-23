let loggedInUser = {};

const user = {
  setLoggedInUser(userData) {
    loggedInUser = userData;
  },
  getLoggedInUser() {
    return { ...loggedInUser };
  },
};
export default Object.freeze(user);
