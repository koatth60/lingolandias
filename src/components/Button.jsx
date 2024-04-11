import { Button } from "@material-tailwind/react";
import React from 'react';

export function ButtonVariants({ variant, value, type }) {
  return (
    <div className="flex w-max gap-4">
      {variant === "filled" && <Button variant="filled">filled</Button>}
      {variant === "gradient" && <Button variant="gradient">{value}</Button>}
      {variant === "outlined" && <Button variant="outlined" className=" font-satoshi text-white border-white">Kontakt</Button>}
      {variant === "text" && <Button variant="text" type={type}>text</Button>}
    </div>
  );
}