/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";
 
export function InputDefault({label, type, required, value, onChange}) {
  return (
    <div className="w-full">
      <Input label={label} type={type} required={required} value={value} onChange={onChange} />
    </div>
  );
}