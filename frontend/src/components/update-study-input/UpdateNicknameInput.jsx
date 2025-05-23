import React, { useState } from "react";
import styles from "./UpdateInput.module.css";

const NicknameInput = ({ setNickname, nickname }) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    setNickname(e.target.value);

    if (e.target.value.length > 10) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <label className={styles.label}>
      <p className={styles.inputBoxTitle}>닉네임</p>
      <input
        onChange={handleChange}
        className={`${styles.input} ${isActive && styles.err}`}
        type="text"
        placeholder="닉네임을 입력해주세요"
        value={nickname}
      />
      {isActive && (
        <p className={styles.errMessage}>*10자 이하로 적어주세요.</p>
      )}
    </label>
  );
};

export default NicknameInput;