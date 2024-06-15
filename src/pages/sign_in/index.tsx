import { SimpleLoginForm } from "./components/SimpleLoginForm";
import Image from "next/image";


export default function SignUp() {
    return (
        <>
            <Image src="/images/backgrounds/sign_up.jpg" alt="background" fill={true} />
            <SimpleLoginForm />
        </>
    )
}  