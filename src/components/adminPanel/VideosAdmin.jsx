import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { LiaEdit } from "react-icons/lia";
import axios from "axios";
import UploadVideos from "./UploadVideos";
import { Link } from "react-router-dom";

function VideosAdmin() {
  const { videos, setVideos } = useContext(ContextProvide);
  const { display, setDisplay } = useContext(ContextProvide);

  const [id, setId] = useState("");
  const handleDisplay = (id) => {
    setId(id);
  };
  const fetchItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/artWorkVideos`);

      if (response.data == null) {
        throw Error("Items not found");
      }
      setVideos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (id) => {
    const isDelete=window.confirm('Are You Sure You Want to Delete this Art?')
    if(isDelete){
      try {
        await axios.delete("http://localhost:3001/artWorkVideos/" + id);
        alert("Image Delete Successfully");
        fetchItems();
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  return (
    <>
      <div className="grid grid-cols-5 gap-14 pl-[300px] pr-20 py-40 ">
        {videos.map((value, index) => {
      
          return (
            <>
              <div className="relative mx-auto shadow-xl w-52 h-72   bg-gray-50 mt-10 border ">
                <video
                  onMouseEnter={() => handleDisplay(value._id)}
                  className="w-full h-52 transition-transform duration-500 group-hover:scale-110"
                  key={index}
                  controls
                  poster
                >
                  <source src={`http://${value.url}`} type="video/mp4" />
                </video>
                <div className="p-2">
                    <p className="text-2xl capitalize">{value.main_title}</p>
                    <p className="text-sm">{value.sub_title}</p>
                  </div>

                <div className={`${id == value._id ? "block" : "hidden"}`}>
                  <div className="absolute bottom-2 right-5">
                    <FaTrashCanArrowUp
                      onClick={() => handleDelete(value._id)}
                      className="text-2xl text-[#009a8a]"
                    />
                    <Link to={`/admin/edit/${value._id}`}>
                      <LiaEdit className="text-2xl text-[#009a8a] mt-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className={`${display ? "block" : "hidden"} fixed`}>
          <UploadVideos />
        </div>
      </div>
    </>
  );
}

export default VideosAdmin;
