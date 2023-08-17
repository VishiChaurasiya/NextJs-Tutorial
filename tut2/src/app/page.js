"use client";
import Image from "next/image";
import Profile from "../../public/vercel.svg";

export default function Home() {
    console.log(Profile);
    return (
        <main>
            <h1>Image Optimization in Next</h1>
            {/* <Image src={Profile} />
            <img src={Profile.src} /> */}

            <Image
                src="https://d34um3r0i45esv.cloudfront.net/footer_logo.svg"
                width={400}
                height={400}
            />
        </main>
    );
}
