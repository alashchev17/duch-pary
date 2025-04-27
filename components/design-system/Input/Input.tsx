import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";
import { Flex } from "../Layout";
import { ErrorIcon } from "./ErrorIcon";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  state?: "default" | "error";
  value?: string;
  onValueChange?: (value: string) => void;
  textarea?: boolean;
};

export const Input: React.FC<InputProps> = ({
  state = "default",
  value,
  onValueChange,
  textarea = false,
  ...props
}) => {
  // Use a generic handler that works with both element types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onValueChange?.(e.target.value);
  };

  return (
    <Flex className="relative w-full items-center">
      {textarea ? (
        <textarea
          className={classNames(
            styles.baseInput,
            styles.baseTextArea,
            {
              [styles.error]: state === "error",
            },
            "transition-colors duration-150",
          )}
          value={value}
          onChange={
            handleChange as React.ChangeEventHandler<HTMLTextAreaElement>
          }
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={classNames(
            styles.baseInput,
            {
              [styles.error]: state === "error",
            },
            "transition-colors duration-150",
          )}
          value={value}
          onChange={handleChange}
          {...props}
        />
      )}
      {state === "error" && (
        <ErrorIcon
          className={
            textarea
              ? "absolute right-6 top-6"
              : "absolute right-6 top-[50%] translate-y-[-50%]"
          }
        />
      )}
    </Flex>
  );
};
