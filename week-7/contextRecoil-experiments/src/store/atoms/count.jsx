import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const isCountEven = selector({
  key: "IsCountEven",
  get: ({ get }) => {
    return get(countAtom) % 2 === 0;
  },
});
