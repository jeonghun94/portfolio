import { create } from "zustand";

type State = {
  activeTitle: string;
  setActiveTitle: (title: string) => void;
};

export const useTitleStore = create<State>((set) => ({
  activeTitle: "",
  setActiveTitle: (title: string) => set({ activeTitle: title }),
}));
