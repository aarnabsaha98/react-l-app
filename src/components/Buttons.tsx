interface Props {
  children: string;
  onClickMessage: (text: string) => void;

  // reprends the optional
  // also as it is string we can use any string values that may not represent a perticular color
  color?: "Primary" | "danger" | "success"; // string;
}

export default function Buttons({
  children,
  onClickMessage,
  color = "success",
}: Props) {



  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => onClickMessage(color)}>
        {children}
      </button>
    </>
  );
}
