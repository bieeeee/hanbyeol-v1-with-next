import { create } from "zustand";

interface Modal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    toggleModal: () => void;
}

const useModalStore = create<Modal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    toggleModal: () => set((state) => ({ isOpen: !state.isOpen }))
}));

export default useModalStore;