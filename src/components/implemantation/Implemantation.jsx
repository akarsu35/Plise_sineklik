import { Link } from "react-router-dom"

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'


export default function Implemantation({ img, title, id ,path}) {
  return (
    <Card className="flex p-2 md:p-0 justify-center items-center mt-6 w-[21rem] hover:shadow-2xl">
      <CardHeader color="blue-gray" className="relative h-[26rem]">
        <img src={img} alt={title} />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-2 text-center text-xl"
        >
          {title}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 ">
        <Button className="bg-[#B756A0]">
          <Link to={path}>ÜRÜNÜ İNCELE</Link>
        </Button>
      </CardFooter>
    
    </Card>
  )
}