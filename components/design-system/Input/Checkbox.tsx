import React, { useState } from "react";
import Typography from "../Typography";
import styles from "./Checkbox.module.css";
import { Tick } from "./Tick";
import classNames from "classnames";

export type CheckboxProps = {
  label?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked: controlledChecked,
  onCheckedChange,
  id,
  name,
  required = false,
  disabled = false,
}) => {
  const [internalChecked, setInternalChecked] = useState(false);

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }
  };

  const checkboxId =
    id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <label htmlFor={checkboxId} className={styles.checkboxContainer}>
      <div className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          checked={isChecked}
          onChange={handleChange}
          className={styles.checkboxInput}
          required={required}
          disabled={disabled}
        />
        <div className={styles.checkboxCustom}></div>
        <Tick
          className={classNames(
            styles.checkboxTick,
            "[&>path]:stroke-brand-bg",
          )}
        />
      </div>
      {label && (
        <Typography
          variant="body"
          className={`${styles.checkboxLabel} font-[16px] leading-[26px] text-brand-bg`}
        >
          {label}
        </Typography>
      )}
    </label>
  );
};
