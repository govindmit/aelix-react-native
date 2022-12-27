import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://103.127.29.85:4001/api",
  },
  // staging: {
  //   apiUrl: "https://demoreactnativeapp.herokuapp.com/api",
  // },
  // prod: {
  //   apiUrl: "https://demoreactnativeapp.herokuapp.com/api",
  // },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
