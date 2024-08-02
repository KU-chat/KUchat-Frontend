import React from "react";

interface SignupConfirmButtonProps {
  onClick: () => void;
  isEnabled: boolean;
}

const SignupConfirmButton: React.FC<SignupConfirmButtonProps> = ({
  onClick,
  isEnabled,
}) => {
  return (
    <button
      style={{
        backgroundColor: isEnabled ? "#046b40" : "#c6c6c6",
        width: "84vw",
        height: "6vh",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "6px",
        color: "#fff",
        border: "none",
        fontFamily: "Pretendard",
        fontSize: "14px",
        cursor: isEnabled ? "pointer" : "not-allowed",
      }}
      onClick={onClick}
      disabled={!isEnabled}
    >
      확인
    </button>
  );
};

export default SignupConfirmButton;
