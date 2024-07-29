import { create } from "zustand";
import { LanguageOption } from "../routes/Signup/components/Language";

interface SignupState {
  selectedAppLanguage: LanguageOption | null;
  selectedStudyLanguage1: LanguageOption | null;
  selectedStudyLanguage2: LanguageOption | null;
  setSelectedAppLanguage: (language: LanguageOption | null) => void;
  setSelectedStudyLanguage1: (language: LanguageOption | null) => void;
  setSelectedStudyLanguage2: (language: LanguageOption | null) => void;
}

const useSignupStore = create<SignupState>((set) => ({
  selectedAppLanguage: null,
  selectedStudyLanguage1: null,
  selectedStudyLanguage2: null,
  setSelectedAppLanguage: (language) => set({ selectedAppLanguage: language }),
  setSelectedStudyLanguage1: (language) =>
    set({ selectedStudyLanguage1: language }),
  setSelectedStudyLanguage2: (language) =>
    set({ selectedStudyLanguage2: language }),
}));
export default useSignupStore;
