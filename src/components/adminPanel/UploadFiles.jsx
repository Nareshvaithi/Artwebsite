import React from "react";
import { useContext } from "react";
import { ContextProvide } from "../../ContextAPI/CreateContext";
import uploadImg from "../../assets/file_upload/383236847_852685816154955_2106730470891852766_n.jpg";
import { FaRegRectangleXmark } from "react-icons/fa6";
import { useFormik } from "formik";
import axios from "axios";

function UploadFiles() {
  const { display, setDisplay } = useContext(ContextProvide);
  const { images, setImages } = useContext(ContextProvide);

  const formik = useFormik({
    initialValues: {
      main_title: "",
      sub_title: "",
      style: "",
      year: "",
      url: "",
    },
    validate: (values) => {
      let error = {};
      if (values.main_title === "") {
        error.main_title = "*Required Title*";
      }
      if (values.sub_title === "") {
        error.sub_title = "*Required Sub_Title*";
      }
      if (values.style === "") {
        error.style = "*Required Style*";
      }
      if (values.year === "") {
        error.year = "*Required Year*";
      } else if (values.year.length < 4 || values.year.length > 4) {
        error.year = "*Year should contains 4 numbers*";
      }

      return error;
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const formData = new FormData();
      formData.append("main_title", values.main_title);
      formData.append("sub_title", values.sub_title);
      formData.append("style", values.style);
      formData.append("year", values.year);
      formData.append("url", values.file); // Add the file

      try {
        await axios.post("http://localhost:3001/artwork", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const response = await axios.get("http://localhost:3001/artwork");
        if (response.data == null) {
          throw Error("Items not found");
        }
        setImages(response.data);
      } catch (err) {
        console.log(err.message);
      }
      resetForm();
    },
  });

  return (
    <>
      <section className={`h-auto flex items-center justify-center`}>
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">File Upload</h2>

            <form
              className="flex flex-col gap-4"
              onSubmit={formik.handleSubmit}
            >
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
                placeholder="Sub_title"
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
              <input
                className="p-2 rounded-xl border w-full"
                type="file"
                name="url"
                onChange={(event) => {
                  formik.setFieldValue("file", event.currentTarget.files[0]);
                }}
                value={formik.values.url}
              />
              <button
                type="submit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
                onClick={() => {setDisplay(false)}}
              >
                Upload
              </button>
            </form>
          </div>

          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src={uploadImg} />
          </div>
          <div className="absolute top-2 right-2">
            <FaRegRectangleXmark
              onClick={() => setDisplay(!display)}
              className="text-2xl text-[#002D74]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default UploadFiles;
