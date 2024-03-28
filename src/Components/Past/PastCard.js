
import { Stack, Typography, useTheme } from "@mui/material"

const ServiceCardContent = ({ service }) => {
	const theme = useTheme()

	return (
		<div className="flex flex-col gap-5 justify-center items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
                alt="cat1"
                className="rounded-[100%] h-[150px] w-[150px]"
              />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <h1>Anshu Agrawal</h1>
              <p>Founder DareDevils</p>
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
				width: '100%',
				height: '100%',
				
				overflow: 'hidden',
			
			}}
		>
			<ServiceCardContent service={service} />
		</Stack>
	)
}

export default ServiceCard