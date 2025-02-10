import Image from "next/image";
import Link from "next/link";
import navbar from "@/app/asset/navbar.png"

export default function Navbar() {
    return (
        <nav className="text-gray-500 body-font shadow-lg">
            <div className="flex flex-wrap p-2 flex-col md:flex-row mx-auto justify-between items-center">
                <Image src={navbar} alt="Eye Glasses" width={150} height={90} />
                <div className="flex space-x-4 hover:text-blue-500 transition-colors duration-300 transform hover:scale-105">
                    <Link href="/Blog">
                        Blog
                    </Link>
                    <Link href="/sunglasses">
                        Glasses
                    </Link>
                </div>
            </div>
        </nav>
    );
}
