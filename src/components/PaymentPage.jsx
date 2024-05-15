import { Box, VStack, Heading, Text } from "@chakra-ui/react"

import { useSearchParams, useNavigate } from "react-router-dom"





const Payment = () => {
    const navigate = useNavigate()

    const searchQuery = useSearchParams()[0]

    const referenceNum = searchQuery.get("refrence")

    setTimeout(() => {
        navigate("/")
    }, 4000)




    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"} >

                <Heading textTransform={"uppercase"}>Order successfully</Heading>

                <Text>
                    Referance No:- {referenceNum}<br></br>





                </Text>




            </VStack>


        </Box>
    )
}

export default Payment
