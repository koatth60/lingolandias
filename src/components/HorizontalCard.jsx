import {
  Card,
  CardHeader,
  CardBody,
  Typography,
 
} from "@material-tailwind/react";


// eslint-disable-next-line react/prop-types
export function HorizontalCard({ name, description, photo, maxWidth }) {
  return (
    <Card className={`xl:max-w-[60rem] max-w-[${maxWidth}] xl:max-h-[42rem] w-full bg-cards lg:flex-row mx-auto my-4 font-satoshi shadow-lg`}>
      <CardHeader 
        shadow={false}
        floated={false}
        className="m-0 xl:w-2/5  lg:w-[40%] shrink-0 lg:rounded-r-none rounded-r-xl"
      >
        <img
          src={photo}
          alt="card-image"
          className="h-full w-full object-cover lg:rounded-r-none rounded-r-xl "
        />
      </CardHeader>
      <CardBody className="md:px-6 px-3 ">
        <Typography variant="h6" color="gray" className="mb-4 uppercase text-[#43a047] text-lg ">
          lingolandias
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2 -bold text-white">
          {name}
        </Typography>
        <Typography color="gray" className="mb-8  text-white text-lg ">
         {description}
        </Typography>
       
      </CardBody>
    </Card>
  );
}
