import React from "react";
import Image from "next/image";
import Link from "next/link";

  export default function BlogCards() {
    const blogPosts = [
      {
        id: "1",
        title: "Eye Glasses",
        description: "Upgrade Your Look with Trendy & Protective Sunglasses",
        date: "Jan 01, 2025",
        image: "/19.jpg", 
       price: "$45"
      },
      {
        id: "2",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish & Comfortable Eyeglasses",
        date: "jan 02, 2025",
        image: "/15.jpg",
        price: "$50"
      },
      {
        id: "3",
        title: "Eye Glasses",
        description: "upgrade Your Look with Your Vision with Stylish Protective  Eyeglasses",
        date: "jan 03, 2025",
        image: "/13.jpg",
        price: "$40"
      },
      {
        id: "4",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 04, 2025",
        image: "/11.jpg", 
        price: "$41"
      },
      {
        id: "5",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 05, 2025",
        image: "/1.jpg",
        price: "$40"
      },
      {
        id: "6",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 06, 2025",
        image: "/3.jpg",
        price: "$34"
      }, 
      {
        id: "7",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 07, 2025",
        image: "/4.jpg",
        price: "$40"
      },
       {
        id: "8",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 08, 2025",
        image: "/2.jpg",
        price: "$22"
      },
      {
        id: "9",
        title: "Eye Glasses",
        description: "Upgrade Your Look with Trendy & Protective Sunglasses",
        date: "Jan 01, 2025",
        image: "/5.jpg", 
        price: "$40"
       
      },
      {
        id: "10",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish & Comfortable Eyeglasses",
        date: "jan 02, 2025",
        image: "/6.jpg",
        price: "$42"
      },
      {
        id: "11",
        title: "Eye Glasses",
        description: "upgrade Your Look with Your Vision with Stylish Protective  Eyeglasses",
        date: "jan 03, 2025",
        image: "/7.jpg",
        price: "$38"
      },
      {
        id: "12",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 04, 2025",
        image: "/8.jpg",
        price: "$33"
      },
      {
        id: "13",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 05, 2025",
        image: "/9.jpg",
        price: "$45"
      
      },
      {
        id: "14",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 06, 2025",
        image: "/10.jpg",
        price: "$40"
      }, 
      {
        id: "15",
        title: "Eye Glasses",
        description: "Upgrade Your Look with Trendy & Protective Sunglasses",
        date: "Jan 01, 2025",
        image: "/18.jpg",
        price: "$20" 
       
      },
      {
        id: "16",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish & Comfortable Eyeglasses",
        date: "jan 02, 2025",
        image: "/16.jpg",
        price: "$25"
      },
      {
        id: "17",
        title: "Eye Glasses",
        description: "upgrade Your Look with Your Vision with Stylish Protective  Eyeglasses",
        date: "jan 03, 2025",
        image: "/12.jpg",
        price: "$30"
      },
      {
        id: "18",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 04, 2025",
        image: "/14.jpg",
        price: "$28"
      },
      {
        id: "19",
        title: "Eye Glasses",
        description: "Enhance Your Vision with Stylish  Eyeglasses",
        date: "jan 04, 2025",
        image: "/17.jpg",
        price: "$35"
      },
    ];
  
  return (
   <>
    {blogPosts.map((p:any, index:number)=>(
          <div key={index} className="grid-cols-1 lg:grid-cols-3 w-[50%] border border-red-800 bg-gray-300 rounded-xl shadow-lg overflow-hidden">
            <div className="w-full">
              <Image src={p.image} alt={p.title} width={200} height={200} className="w-full" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.date}</p>
              <p className="text-gray-700 mt-2">{p.description}</p>
              <Link href={`Blog/${p.id}`} className="text-blue-500 text-sm font-medium">Read more →</Link>
            </div>
         </div>
    ))}
    </>
  ); 
};

