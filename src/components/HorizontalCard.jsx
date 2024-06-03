import {
  Card,
  CardHeader,
  CardBody,
  Typography,
 
} from "@material-tailwind/react";


// eslint-disable-next-line react/prop-types
export function HorizontalCard({ name, description, photo }) {
  return (
    <Card className="w-full max-w-[60rem] max-h-[28rem] bg-cards flex-row mx-16 my-4 font-satoshi shadow-lg">
      <CardHeader 
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={photo}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase text-[#43a047]">
          lingolandias
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2 -bold text-white">
          {name}
        </Typography>
        <Typography color="gray" className="mb-8  text-white">
         {description}
        </Typography>
       
      </CardBody>
    </Card>
  );
}
