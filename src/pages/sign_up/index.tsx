import { SimpleRegistrationForm } from "./components/SimpleRegistrationForm";
import Image from "next/image";


export default function SignUp() {
    return (
        <>
            <Image src="/images/backgrounds/sign_up.jpg" alt="background" fill={true} />
            <SimpleRegistrationForm />
        </>
    )
}  