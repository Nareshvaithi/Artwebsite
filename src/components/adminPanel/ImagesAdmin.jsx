import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import { FaTrash } from "react-icons/fa";
import { LiaEdit } from "react-icons/lia";
import axios from "axios";
import UploadFiles from "./UploadFiles";
import { Link } from "react-router-dom";

function ImagesAdmin() {
  const { images, setImages } = useContext(ContextProvide);
  const {display,setDisplay}=useContext(ContextProvide);

  const [id, setId] = useState("");
  const handleDisplay = (id) => {
    
    setId(id);
  };
  const fetchItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/artwork`);

      if (response.data == null) {
        throw Error("Items not found");
      }
      setImages(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (id) => {
    const isDelete=window.confirm('Are You Sure You Want to Delete this Art?')
    if(isDelete){
      try {
        await axios.delete("http://localhost:3001/artwork/" + id);
        alert("Image Delete Successfully");
        fetchItems();
      } catch (err) {
        console.log(err.message);
      }
    };
    }

 
  return (
    <>
    
      <div className="grid grid-cols-5 pl-[270px] py-40">
  {images.map((value, index) => {
    return (
      <div 
        key={value._id} 
        className="relative mx-auto w-52 h-52 overflow-hidden group" 
        style={{ margin: "10px" }}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={`http://${value.url}`}
          alt={`Artwork ${index}`}
        />

        <div 
          className="absolute bottom-5 left-5 text-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <p className="text-2xl text-white capitalize font-MonaSans">{value.main_title}</p>
          <p className="text-sm text-white font-MonaSans">{value.sub_title}</p>
        </div>
        <div 
          className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <FaTrash color="white" size={40}
            onClick={() => handleDelete(value._id)}
            className=" bg-[#009a8a] p-2  cursor-pointer rounded-3xl"
          />
          <Link to={`/admin/edit/${value._id}`}>
            <LiaEdit color="white" size={40} className=" text-[#009a8a] mt-2 cursor-pointer" />
          </Link>
        </div>
      </div>
    );
  })}
  <div className={`${display ? "block" : "hidden"} fixed`}>
          <UploadFiles />
        </div>
</div>

    </>
  );
}

export default ImagesAdmin;
