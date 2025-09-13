type InputProps = React.ComponentProps<"input">

export function Input(props: InputProps) {
  return (
    <input className="border border-gray-300 rounded-md p-2 w-64" {...props} />
  );
}
