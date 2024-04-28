import { Textarea } from "@material-tailwind/react";
 
export function TextareaDefault({label}) {
  return (
    <div className="w-full h-auto ">
      <Textarea label={label} />
    </div>
  );
}