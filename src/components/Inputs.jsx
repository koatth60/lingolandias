/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";
 
export function InputDefault({label, type, required, value, onChange}) {
  return (
    <div className="w-full lg:mb-0 md:mb-6 mb-0 ">
      <Input label={label} type={type} required={required} value={value} onChange={onChange} 
      className="lg:h-auto md:h-14" />
    </div>
  );
}