import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import { FaTrashCanArrowUp } from "react-icons/fa6";
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
    try {
      await axios.delete("http://localhost:3001/artwork/" + id);
      alert("Image Delete Successfully");
      fetchItems();
    } catch (err) {
      console.log(err.message);
    }
  };

  // const handleEdit = async (id) => {
  //   try {
  //     await axios.delete("http://localhost:3001/artwork/" + id);
  //     alert("Image Delete Successfully");
  //     fetchItems();
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3001/artwork/", values);
      fetchItems();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
    
      <div className="grid grid-cols-5 pl-60 py-40">
        {images.map((value, index) => {
          return (
            <>
              <div className="relative mx-auto">
                <img
                  onMouseEnter={() => handleDisplay(value._id)}
                  className="w-5/12"
                  key={index}
                  src={`http://${value.url}`}
                  alt={`Artwork ${index}`}
                  style={{
                    margin: "10px",
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className={`${id == value._id ? "block" : "hidden"}`}>
                  <div className={`absolute bottom-5 left-5`}>
                    <p className="text-2xl capitalize">{value.main_title}</p>
                    <p className="text-sm">{value.sub_title}</p>
                  </div>
                  <div className="absolute top-6 left-40">
                    <FaTrashCanArrowUp
                      onClick={() => handleDelete(value._id)}
                      className="text-2xl text-[#009a8a]"
                    />
                    <Link to={`/admin/edit/${value._id}`}>
                    <LiaEdit
                      
                      className="text-2xl text-[#009a8a] mt-2"
                    />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    <div className={`${display ? "block" : "hidden" } fixed`}>
      <UploadFiles />
    </div>

        
      </div>
    </>
  );
}

export default ImagesAdmin;
