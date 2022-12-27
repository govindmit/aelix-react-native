//import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";
import { date } from "yup";
// import moment from "moment";
import dayjs from "dayjs";
import logger from "./logger";

const prefix = "cache";
const expiryInMinute = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = async (key) => {
  const now = dayjs(Date.now());
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, "minute") > 5;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    if (!item) return null;

    if (isExpired(item)) {
      //command query sepration (CQS )
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
  } catch (error) {
    // console.log(error);
    logger.log();
  }
};
export default {
  store,
  get,
};
