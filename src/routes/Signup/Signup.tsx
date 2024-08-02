import React, { useState } from "react";
import left_arrow from "../../assets/img/left_arrow.svg";
import Language, { LanguageOption } from "./components/Language";
import Nation, { NationOption } from "./components/Nation";
import Name from "./components/Name";
import StudentId from "./components/StudentId";
import StudentInfo from "./components/StudentInfo";
import Gender from "./components/Gender";
import Birth from "./components/Birth";
import SignupComplete from "./components/SignupComplete";
import styles from "./Signup.module.css";
import useSignupStore from "../../stores/useSignupStore";
export type Step =
  | "Language"
  | "Nation"
  | "Name"
  | "StudentId"
  | "StudentInfo"
  | "Gender"
  | "Birth"
  | "SignupComplete";

const Signup = () => {
  const [step, setStep] = useState<Step>("Language");

  const handleLanguageConfirm = (
    appLanguage: LanguageOption,
    studyLanguageFirst: LanguageOption,
    studyLanguageSecond: LanguageOption,
  ) => {
    useSignupStore.setState({
      appLanguage: appLanguage,
      studyLanguageFirst: studyLanguageFirst,
      studyLanguageSecond: studyLanguageSecond,
    });
    setStep("Nation");
  };

  const handleNationConfirm = (nation: NationOption) => {
    useSignupStore.setState({ nation: nation });
    setStep("Name");
  };

  const handleNameConfirm = (name: string) => {
    useSignupStore.setState({ name: name });
    setStep("Name");
  };

  const handleStudentInfoConfirm = (studentInfo: string) => {
    useSignupStore.setState({ studentInfo: studentInfo });
  };

  const handleGenderConfirm = (gender: string) => {
    useSignupStore.setState({ gender: gender });
  };

  const handleBirthConfirm = (birth: string) => {
    useSignupStore.setState({ birth: birth });
  };

  const steps: Record<Step, JSX.Element> = {
    Language: <Language onConfirm={handleLanguageConfirm} />,
    Nation: <Nation onConfirm={handleNationConfirm} />,
    Name: <Name onConfirm={handleNameConfirm} />,
    StudentId: <StudentId />,
    StudentInfo: <StudentInfo onConfirm={handleStudentInfoConfirm} />,
    Gender: <Gender onConfirm={handleGenderConfirm} />,
    Birth: <Birth onConfirm={handleBirthConfirm} />,
    SignupComplete: <SignupComplete />,
  };
  const backBtnEnabled = (step: Step): boolean => {
    if (step == "Language" || step == "SignupComplete") {
      return false;
    } else {
      return true;
    }
  };

  const handleBackClick = () => {
    if (step === "Nation") {
      setStep("Language");
    } else if (step === "Name") {
      setStep("Nation");
    } else if (step === "StudentId") {
      setStep("Name");
    } else if (step === "StudentInfo") {
      setStep("StudentId");
    } else if (step === "Gender") {
      setStep("StudentInfo");
    } else if (step === "Birth") {
      setStep("Gender");
    } else if (step === "SignupComplete") {
      setStep("Birth");
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.backBtn}>
        {backBtnEnabled(step) && (
          <img
            src={left_arrow}
            onClick={handleBackClick}
            style={{ visibility: backBtnEnabled(step) ? "visible" : "hidden" }}
          />
        )}
      </div>
      <div className={styles.body}>
        <div>{steps[step]}</div>
      </div>
    </div>
  );
};

export default Signup;
