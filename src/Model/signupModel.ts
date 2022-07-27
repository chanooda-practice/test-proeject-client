import { atom, selector } from "recoil";

export const phoneNumberState = atom({
  key: "phoneNumberState",
  default: "",
});

export const checkPhoneNumber = selector({
  key: "checkPhoneNumber",
  get: ({ get }) => {
    const phoneNumber = get(phoneNumberState);
    let check = false;

    return check;
  },
});
