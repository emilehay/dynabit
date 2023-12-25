import styles from "./FieldGroup.module.scss";

export const FieldGroup = ({ label, type, options = [], ...inputProps }) => {
  const handleOptionChange = (value) => {
    inputProps.handleOptionChange(value);
  };

  const renderInputField = () => {
    switch (type) {
      case "text":
      case "email":
      case "password":
      case "number":
        return <input type={type} {...inputProps} />;
      case "textarea":
        return <textarea {...inputProps} />;
      case "checkbox":
        return options.map((option) => (
          <div
            key={option.value}
            className={`${styles.pill_checkbox} ${
              inputProps.value.includes(option.value) ? styles.selected : ""
            }`}
            onClick={() => handleOptionChange(option.value)}
          >
            {option.label}
          </div>
        ));
      case "radio":
        return options.map((option) => (
          <div
            key={option.value}
            className={`${styles.pill_radio} ${
              inputProps.value === option.value ? styles.selected : ""
            }`}
            onClick={() => handleOptionChange(option.value)}
          >
            {option.label}
          </div>
        ));
      case "select":
        return (
          <select
            {...inputProps}
            onChange={(e) => handleOptionChange(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return <input type="text" {...inputProps} />;
    }
  };

  return (
    <div className={styles.field_group}>
      <label>{label}</label>
      {renderInputField()}
    </div>
  );
};
