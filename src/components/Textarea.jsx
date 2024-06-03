/* eslint-disable react/prop-types */
import { Textarea } from "@material-tailwind/react";

export function TextareaDefault({label, value, onChange}) {
  return (
    <div className="w-full h-auto ">
      <Textarea label={label} value={value} onChange={onChange} />
    </div>
  );
}