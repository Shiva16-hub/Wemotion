let navigator;

const setNavigator = (nav) => {
  navigator = nav;
};

const navigateTo = (routeName, params) => {
  if (navigator) {
    navigator.navigate(routeName, params);
  }
};

export default {
  setNavigator,
  navigateTo,
};
