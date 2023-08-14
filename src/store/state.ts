import { create } from "zustand";

type State = {
  activeTitle: string;
  setActiveTitle: (title: string) => void;
};

const useStore = create<State>((set) => ({
  activeTitle: "",
  setActiveTitle: (title: string) => set({ activeTitle: title }),
}));

export default useStore;
