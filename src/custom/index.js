import Input from "antd/lib/input/Input";
import React, { forwardRef } from "react";

export const AntdCustom = forwardRef(
  (
    {
      label = "",
      error = "",
      placeholder = "",
      disable = "",
      errorClass = "spark-input-error-text",
      onChange = () => {},
      onBlur = () => {},
      requiredStarClass = "",
      required = false,
      autoFocus,
      className = "",
      allowClear = false,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      onChange && onChange(e.target.value);
    };
    const handleBlur = () => {
      onBlur && onBlur(null);
    };
    return (
      <div>
        {!!label && (
          <label>
            {label}{" "}
            {required && (
              <span className={`${requiredStarClass} mb-2 required-cell`}>
                {" "}
                *{" "}
              </span>
            )}
          </label>
        )}
        <Input
          className={`${className} antd-override-input`}
          autoFocus={autoFocus}
          allowClear={allowClear}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          placeholder={placeholder}
        />
        {!!error && <span className={errorClass}>{error}</span>}
      </div>
    );
  }
);
