import "./textInput.css";

interface TextInputProps {
  handleUserInput: (value: string) => void;
  onKeyboardEnter?: (value: string) => void;
  type: "text" | "password" | "email";
  value: string;
  styles?: string;
  style?: React.CSSProperties;
  size?: string;
  error?: string;
  isVertical?: boolean;
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
}: TextInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleUserInput) handleUserInput(event.target.value); // Pass just the value
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onKeyboardEnter) {
      onKeyboardEnter(value);
    }
  };
  const textInputStyles = `text-input  variant-${size} ${styles}`;
  return (
    <div className={`flex ${isVertical ? "isVertical" : ""}`}>
      <input
        type={type}
        placeholder="placeholder"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        className={textInputStyles}
        style={style}
        role="textbox"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
