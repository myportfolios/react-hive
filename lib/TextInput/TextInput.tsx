import "./textInput.css";

interface TextInputProps {
  handleUserInput: (value: string) => void;
  onKeyboardEnter?: (value: string) => void;
  value: string;
  styles?: string;
  style?: React.CSSProperties;
  size?: string;
}
export function TextInput({
  handleUserInput,
  onKeyboardEnter,
  value,
  styles = "",
  style = {},
  size = "sm",
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
    <input
      type="text"
      placeholder="placeholder"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      className={textInputStyles}
      style={style}
      role="textbox"
    />
  );
}
