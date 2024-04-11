import { Input } from "@material-tailwind/react";
 
export function InputDefault({label, type, required}) {
  return (
    <div className="w-full ">
      <Input label={label}  type={type} required={required}/>
    </div>
  );
}