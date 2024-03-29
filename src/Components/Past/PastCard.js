
import { Stack, Typography, useTheme } from "@mui/material"

const ServiceCardContent = ({ service }) => {
	const theme = useTheme()

	return (
		<div className="flex flex-col gap-5 justify-center items-center">
            <div>
              <img
                src={service.logo}
                alt="cat1"
                className={service?.designation ? "rounded-[50%] h-[150px] w-[150px]":" h-[150px] w-[150px]"}
              />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center text-white ">
              <h1 className="text-xl">{service.brand}</h1>
              <p className="text-wrap text-xs">{service?.designation}</p>
            </div>
          </div>

	)
}

const ServiceCard = ({ service }) => {
	// const [x, y] = useCursorStore(state => [state.x, state.y])


	return (
		<Stack
			position='relative'
			sx={{
				display:'flex',
				width: '100%',
				minHeight: '350px',
				
			}}
		>
			<ServiceCardContent service={service} />
		</Stack>
	)
}

export default ServiceCard