import BlogCards from "./component/BlogCards";
export default function BlogPage() {
  const blogPosts =  [
    {
      id: "1",
      title: "Eye Glasses",
      description: "Upgrade Your Look with Trendy & Protective Sunglasses",
      date: "Jan 01, 2025",
      image: "/19.jpg", 
     
    },
    {
      id: "2",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish & Comfortable Eyeglasses",
      date: "jan 02, 2025",
      image: "/7.jpg",
    },
    {
      id: "3",
      title: "Eye Glasses",
      description: "upgrade Your Look with Your Vision with Stylish Protective  Eyeglasses",
      date: "jan 03, 2025",
      image: "/13.jpg",
    },
    {
      id: "4",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 04, 2025",
      image: "/11.jpg",
    },
    {
      id: "5",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 05, 2025",
      image: "/1.jpg",
    },
    {
      id: "6",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 06, 2025",
      image: "/3.jpg",
    }, {
      id: "7",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 07, 2025",
      image: "/4.jpg",
    }, {
      id: "8",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 08, 2025",
      image: "/2.jpg",
    },
    {
      id: "9",
      title: "Eye Glasses",
      description: "Upgrade Your Look with Trendy & Protective Sunglasses",
      date: "Jan 01, 2025",
      image: "/5.jpg", 
     
    },
    {
      id: "10",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish & Comfortable Eyeglasses",
      date: "jan 02, 2025",
      image: "/6.jpg",
    },
    {
      id: "11",
      title: "Eye Glasses",
      description: "upgrade Your Look with Your Vision with Stylish Protective  Eyeglasses",
      date: "jan 03, 2025",
      image: "/17.jpg",
    },
    {
      id: "12",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 04, 2025",
      image: "/15.jpg",
    },
    {
      id: "13",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 05, 2025",
      image: "/9.jpg",
    },
    {
      id: "14",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 06, 2025",
      image: "/10.jpg",
    }, 
    {
      id: "15",
      title: "Eye Glasses",
      description: "Upgrade Your Look with Trendy & Protective Sunglasses",
      date: "Jan 01, 2025",
      image: "/18.jpg", 
     
    },
    {
      id: "16",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish & Comfortable Eyeglasses",
      date: "jan 02, 2025",
      image: "/16.jpg",
    },
    {
      id: "17",
      title: "Eye Glasses",
      description: "upgrade Your Look with Your Vision with Stylish Protective  Eyeglasses",
      date: "jan 03, 2025",
      image: "/12.jpg",
    },
    {
      id: "18",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 04, 2025",
      image: "/14.jpg",
    },
    {
      id: "19",
      title: "Eye Glasses",
      description: "Enhance Your Vision with Stylish  Eyeglasses",
      date: "jan 04, 2025",
      image: "/8.jpg",
    },
  ];
  
  return (
    <div className="flex flex-wrap gap-6 justify-center p-4 bg-slate-600">
     
      
        <BlogCards/>
       
     
    </div>
  );
}
