import "./textInput.css";

interface TextInputProps {
  handleUserInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
      onChange={handleUserInput}
      onKeyDown={handleKeyPress}
      className={textInputStyles}
      style={style}
    />
  );
}
