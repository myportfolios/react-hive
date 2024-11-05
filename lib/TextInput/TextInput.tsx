import "./textInput.css";

interface TextInputProps {
  handleUserInput: (value: string, type: string) => void;
  onKeyboardEnter?: (value: string) => void;
  type: "text" | "password" | "email";
  value: string;
  styles?: string;
  style?: React.CSSProperties;
  size?: string;
  error?: string;
  isVertical?: boolean;
  label: string;
}
export function TextInput({
  handleUserInput,
  onKeyboardEnter,
  type = "text",
  value,
  styles = "",
  style = {},
  size = "sm",
  error = "Error",
  isVertical = false,
  label = "Email",
}: TextInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleUserInput) {
      const value = event.target.value;
      handleUserInput(value, type); // Pass just the value
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onKeyboardEnter) {
      onKeyboardEnter(value);
    }
  };
  const textInputStyles = `text-input  variant-${size} ${styles}`;
  return (
    <div
      className={`flex items-baseline ${
        isVertical ? "isVertical" : "space-x-4"
      }`}
    >
      <label
        className="text-primary"
        id={type}
        htmlFor={type}
        role="label"
        aria-label={label}
        tabIndex={0}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder="placeholder"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className={textInputStyles}
        style={style}
        role="textbox"
        name={type}
        id={type}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
