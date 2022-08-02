import { atom, selector } from "recoil";

export const nameState = atom({
  key: "name",
  default: "",
});
