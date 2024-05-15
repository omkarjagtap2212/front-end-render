import { Box, Stack } from "@chakra-ui/react"
import Card from "./Card"
import axios from "axios"

const Home = () => {
    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("https://aws-backend-payment-3.onrender.com/api/getkey")

        const { data: { order } } = await axios.post("https://aws-backend-payment-3.onrender.com/api/checkout", {
            amount
        })
        var options = {
            key, // Enter the Key ID generated from the Dashboard
            "amount":order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Omkar Jagtap",
            "description": "Test Transaction",
            "image": "https://pbs.twimg.com/profile_images/1738592369732403200/DP8LOnap_400x400.jpg",
             
            "order_id":order.id,
            "callback_url": "https://aws-backend-payment-3.onrender.com/api/paymentVerification",
            "prefill": {
                "name": "Master Jagtap",
                "email": "gaurav.kumar@example.com",
                "contact": "8788349193"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#121212"
            }
        };

        const razor = new window.Razorpay(options);
        razor.open();



    }

    return (
        <Box>

        <Stack h={"100vh"} alignItems={"center"} justifyContent={"center"} direction={["column", "row"]}>
            <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png?v=1620371415"} checkoutHandler={checkoutHandler} />

            <Card amount={3000} img={"https://imgs.search.brave.com/mQ7k-zbNzx59IVaHxE0-7WLsPZ1IR-9jJMVbN5MscXM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/OTkyOTM1L3Bob3Rv/L3NvbnktYTc3LWNh/bWVyYS13aXRoLWxl/bnMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVI4RGVzRkt6/LVpzOW8yUURfalg4/Vm9JWXIzWDh4WXdq/SGxxUmg5TExwSTg9"} checkoutHandler={checkoutHandler} />
            <Card amount={7000} img={"https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_black01_M?$productIntroPlatemobile$&fmt=png-alpha"} checkoutHandler={checkoutHandler} />

        </Stack>

    </Box>
    )
}

export default Home
