import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";
import uploadImg from "../../assets/file_upload/383236847_852685816154955_2106730470891852766_n.jpg";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { useContext } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";

function EditFiles() {
  const { display, setDisplay } = useContext(ContextProvide);

  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    main_title: "",
    sub_title: "",
    style: "",
    year: "",
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/artwork/${id}`);
        if (!response.data) {
          throw new Error("Something went wrong");
        }
        setInitialValues({
          main_title: response.data.main_title || "",
          sub_title: response.data.sub_title || "",
          style: response.data.style || "",
          year: response.data.year || "",
        });
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchItems();
  }, [id]);

  useEffect(() => {
    console.log("Initial Values Updated:", initialValues);
  }, [initialValues]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validate: (values) => {
      const errors = {};
      if (!values.main_title) errors.main_title = "*Required Title*";
      if (!values.sub_title) errors.sub_title = "*Required Subtitle*";
      if (!values.style) errors.style = "*Required Style*";
      if (!values.year) {
        errors.year = "*Required Year*";
      }
      return errors;
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("main_title", values.main_title);
      formData.append("sub_title", values.sub_title);
      formData.append("style", values.style);
      formData.append("year", values.year);
      if (values.file) {
        formData.append("file", values.file);
      }

      try {
        await axios.put(`http://localhost:3001/artwork/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("File updated successfully!");
      } catch (err) {
        console.error(err.message);
      }
    },
  });

  return (
    <section className="h-auto flex items-center justify-center py-40">
              <div className="absolute top-2 right-2">
            
            <FaRegRectangleXmark
              onClick={() => setDisplay(!display)}
              className="text-40xl text-[#002D74]"
            />
          </div>
  
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">File Upload</h2>

          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="main_title"
              onChange={formik.handleChange}
              value={formik.values.main_title}
              placeholder="Title"
            />
            <span style={{ color: "red" }}>{formik.errors.main_title}</span>

            <input
              className="p-2 rounded-xl border w-full"
              type="text"
              name="sub_title"
              onChange={formik.handleChange}
              value={formik.values.sub_title}
              placeholder="Subtitle"
            />
            <span style={{ color: "red" }}>{formik.errors.sub_title}</span>

            <input
              className="p-2 rounded-xl border w-full"
              type="text"
              name="style"
              onChange={formik.handleChange}
              value={formik.values.style}
              placeholder="Style"
            />
            <span style={{ color: "red" }}>{formik.errors.style}</span>

            <input
              className="p-2 rounded-xl border w-full"
              type="text"
              name="year"
              onChange={formik.handleChange}
              value={formik.values.year}
              placeholder="Year"
            />
            <span style={{ color: "red" }}>{formik.errors.year}</span>

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Upload
            </button>
          </form>
        </div>

        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={uploadImg} alt="Upload Preview" />
        </div>
        <div className="absolute top-2 right-2">
            
            <FaRegRectangleXmark
              onClick={() => setDisplay(!display)}
              className="text-40xl text-[#002D74]"
            />
          </div>
  
      </div>
      
    </section>
    
  );
}

export default EditFiles;
