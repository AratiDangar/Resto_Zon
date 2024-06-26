// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import img from "../../assets/LoginPic.jpg";
// import axios from "axios";
// import { toast } from "react-toastify";
// import BASE_URL from "../../utils/config";

// const AddItem = () => {
//   const navigate = useNavigate();
//   const [image, setImage] = useState({});
//   const [uploading, setUploading] = useState(false);
//   const categories = [
//     "Fastfood",
//     "BBQ",
//     "Chinese",
//     "Italian",
//     "Desi",
//     "Dessert",
//     "Other",
//   ];

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     image: "",
//   });
  
  

//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     // You can perform any additional logic here if needed
//     // For example, checking file size or type

//     // Once you've handled any necessary logic, you can call the function to upload the image
//     uploadImage(file);
//   };

//   const uploadImage = async (file) => {
//     let formData = new FormData();
//     formData.append("image", file);
//     try {
//       const response = await fetch(`${BASE_URL}/images/uploads`, {
//         method: "POST",
//         body: formData,
//       });

//       console.log(response);
//       const data = await response.json();
//       console.log("====>", data);
//       setImage({
//         url: data.url,
//       });
//     } catch (error) {
//       console.error("There was a problem with the fetch operation:", error);
//     }
//   };

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // This will animate the scroll
//     });
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // setIsLoading(true);
//     // Combine form data with image data
//     const userData = {
//       ...formData,
//       image: image.url || "",
//     };

//     try {
//       const response = await fetch(`${BASE_URL}/food/create`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },

//         body: JSON.stringify(userData),
//       });
//       const { message } = await response.json();

//       if (response.ok) {
//         // console.log('User registered successfully:', message);
//         toast.success(message);
//         navigate("/manage-items");
//       } else {
//         toast.error(message);
//       }
//     } catch (err) {
//       toast.error("Server not responding");
//     }
//   };

//   const handleChange = (e) => {
//     // Update form data as the user types
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <>
//       <div
//         className="text-white mx-auto h-screen flex py-4 justify-center items-center section"
//         style={{
//           background: ` url('${img}') center / auto 100%  no-repeat`,
//         }}
//       >
//         <form
//           onSubmit={handleSubmit}
//           action=""
//           className="bg-slate-800 my-auto w-[90%] md:w-[70%] lg:w-[50%] border top-8 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-30 relative"
//         >
//           <h1 className="text-4xl pb-6 md:text-5xl font-cursiveFont font-bold text-center text-orange lg:text-6xl">
//             Add Item
//           </h1>
//           <div className="relative my-4 flex flex-col md:flex-row gap-2">
//             <input
//               type="text"
//               placeholder="Item Name"
//               className="block py-2 px-0 w-full  text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <label htmlFor=""></label>
//             <input
//               type="file"
//               className="file-input text-black file-input-bordered w-full max-w-xs"
//               label="image"
//               name="myImage"
//               id="image-upload"
//               accept="jpeg png jpg"
//               onChange={handleImage}
//             />
//           </div>

//           <div className="relative my-4 flex flex-col md:flex-row  gap-2">
//             <input
//               type="number"
//               placeholder="Price"
//               className="block w-full py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//             />
//             <label htmlFor=""></label>
//             <label htmlFor=""></label>
//             <select
//               id="category"
//               name="category"
//               required
//               className="text-black w-full rounded-md outline-none"
//               value={formData.category}
//               onChange={handleChange}
//             >
//               <option value="">Select a category</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="relative my-4">
//             <input
//               type="text"
//               placeholder="Description"
//               className="block w-full py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//             />
//             <label htmlFor=""></label>
//           </div>
//           <button
//             type="submit"
//             className="buttonn bg-orange hover:bg-orangehover my-4  w-full"
//           >
//             Add Item
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddItem;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/LoginPic.jpg";
import { toast } from "react-toastify";
import BASE_URL from "../../utils/config";

const AddItem = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState({});
  const categories = [
    "Fastfood",
    "BBQ",
    "Chinese",
    "Italian",
    "Desi",
    "Dessert",
    "Other",
  ];

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    console.log("File selected:", file);

    uploadImage(file);
  };

  const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch(`${BASE_URL}/images/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);
      setImage({
        url: data.url,
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      ...formData,
      image: image.url || "",
    };

    try {
      const response = await fetch(`${BASE_URL}/food/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
      });

      const { message } = await response.json();

      if (response.ok) {
        toast.success(message);
        navigate("/manage-items");
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Server not responding");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div
        className="text-white mx-auto h-screen flex py-4 justify-center items-center section"
        style={{
          background: ` url('${img}') center / auto 100%  no-repeat`,
        }}
      >
        <form
          onSubmit={handleSubmit}
          action=""
          className="bg-slate-800 my-auto w-[90%] md:w-[70%] lg:w-[50%] border top-8 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-30 relative"
        >
          <h1 className="text-4xl pb-6 md:text-5xl font-cursiveFont font-bold text-center text-orange lg:text-6xl">
            Add Item
          </h1>
          <div className="relative my-4 flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="Item Name"
              className="block py-2 px-0 w-full text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor=""></label>
            <input
              type="file"
              className="file-input text-black file-input-bordered w-full max-w-xs"
              label="image"
              name="myImage"
              id="image-upload"
              accept="image/jpeg, image/png, image/jpg"
              onChange={handleImage}
            />
          </div>

          <div className="relative my-4 flex flex-col md:flex-row gap-2">
            <input
              type="number"
              placeholder="Price"
              className="block w-full py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            <label htmlFor=""></label>
            <label htmlFor=""></label>
            <select
              id="category"
              name="category"
              required
              className="text-black w-full rounded-md outline-none"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="relative my-4">
            <input
              type="text"
              placeholder="Description"
              className="block w-full py-2 px-0 text-white bg-transparent border-0 border-b-2 border-gray-300 outline-none duration-150 focus:border-orange"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <label htmlFor=""></label>
          </div>
          <button
            type="submit"
            className="buttonn bg-orange hover:bg-orangehover my-4 w-full"
          >
            Add Item
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItem;

