import { Textarea } from "@material-tailwind/react";
 
export function TextareaDefault() {
  return (
    <div className="w-full h-auto ">
      <Textarea label="Message" />
    </div>
  );
}