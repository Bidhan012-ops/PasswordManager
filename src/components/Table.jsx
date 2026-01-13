import React from "react";
import { FaCopy } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
 import { ToastContainer, toast } from 'react-toastify';
const Table = ({ iteams,setItems,setisupdating,handleupdate}) => {
  console.log("The ", iteams);
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
        position: "top-right",
        autoClose: 2000,
    });
  }
   const handleDelete=(index)=>{
    const updatedItems = iteams.filter((_, i) => i !== index);
    localStorage.setItem("Array", JSON.stringify(updatedItems));
    setItems(updatedItems);
    }
    const onupdate=(index)=>{
     setisupdating(true);
     console.log("Update  is ready");
     handleupdate(index);
    }
  return (
    <div className="flex justify-center w-full overflow-scroll rounded-2xl sm:overflow-visible">
      <table class="table-auto w-full rounded-2xl overflow-scroll sm:overflow-visible mx-2">
        <thead className="bg-green-700 text-white">
          <tr>
            <th className="py-2">URL</th>
            <th className="py-2">USERNAME</th>
            <th className="py-2">PASSWORD</th>
            <th className="py-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody className="bg-green-100">
          {iteams.map((iteam, index) => (
            <tr key={index}>
              <td className="text-center w-50 py-3 border border-white overflow-clip">
                <span className="flex justify-center items-center relative">
                  <a href={iteam.url} target="_blank" className="px-5">
                    {iteam.url}
                  </a>
                  <FaCopy
                    className="absolute right-1 hover:text-green-900 text-green-500 cursor-pointer"
                    onClick={() => {
                      handleCopy(iteam.url);
                    }}
                  />
                </span>
              </td>
              <td className="text-center w-50 py-3 border border-white">
                <span className="flex justify-center items-center relative">
                    <span className="px-5 sm:px-2">{iteam.userName}</span>
                  <FaCopy
                    className="absolute right-1 hover:text-green-900 text-green-500 cursor-pointer"
                    onClick={() => {
                      handleCopy(iteam.userName);
                    }}
                  />
                </span>
              </td>
              <td className="text-center w-50 py-3 border border-white">
                <span className="flex justify-center items-center relative">
                  <input
                    type="password"
                    value={iteam.password}
                    readOnly
                    className="bg-transparent outline-none border-none text-center w-24"
                  />
                  <FaCopy
                    className="absolute right-1 hover:text-green-900 text-green-500 cursor-pointer"
                    onClick={() => {
                      handleCopy(iteam.password);
                    }}
                  />
                </span>
              </td>
              <td className="text-center w-50 py-3 border border-white">
                <span className="flex justify-center items-center relative gap-3">
                  <span className="cursor-pointer"><lord-icon
                    src="https://cdn.lordicon.com/xyfswyxf.json"
                    trigger="hover"
                    style={{ width: 25, height: 25}}
                    onClick={()=>handleDelete(index)}
                  ></lord-icon></span>
                  <FaEdit className="cursor-pointer size-5" onClick={()=>onupdate(index)}/>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
