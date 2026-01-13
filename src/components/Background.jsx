import React, { useEffect, useRef, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import Table from "./Table";
 import { ToastContainer, toast } from 'react-toastify';
 import Footer from "./Footer";
const Background = () => {
    const [visible,setvisible]=useState(false);
    const [isupdating,setisupdating]=useState(false);
    const [index,setindex]=useState();
    const urlraf=useRef();
    const nameref=useRef();
    const passraf=useRef();
    const [items,setItems]=useState([])
    let Iteamarray=[];
    useEffect(()=>{
        const getdata=JSON.parse(localStorage.getItem("Array"))
        if(getdata!=null) Iteamarray=getdata;
         setItems(Iteamarray);
        console.log("The iteam array form local storage",Iteamarray);
    },[]);
    const handleAdd=()=>{
        const password=passraf.current.value;
        const url=urlraf.current.value;
        const userName=nameref.current.value;
        const inputobj={url,userName,password};
        setItems([...items,inputobj]);
        localStorage.setItem("Array",JSON.stringify([...items,inputobj]));
        urlraf.current.value="";
        nameref.current.value="";
        passraf.current.value="";
        console.log([...items,inputobj]);
    }
    const handleupdate=(index)=>{
      setindex(index);
      const updateobj=items.filter((_,i)=>i==index);
      console.log(index);
      console.log("The update obj is ",updateobj);
      urlraf.current.value=updateobj[0].url;
      nameref.current.value=updateobj[0].userName;
      passraf.current.value=updateobj[0].password;
    }
    const update=()=>{
       const uppassword=passraf.current.value;
        const upurl=urlraf.current.value;
        const upuserName=nameref.current.value;
        const object={url:upurl,userName:upuserName,password:uppassword};
      console.log("The upate index is",index);
     items[index]=object;
     console.log("The update iteams is",items);
     localStorage.setItem("Array",JSON.stringify(items));
     const newarr=JSON.parse(localStorage.getItem("Array"));
     setItems(newarr);
    urlraf.current.value="";
    nameref.current.value="";
    passraf.current.value="";
    setisupdating(false);
    }
  return (
   <div className="flex flex-col min-h-screen relative">
  <div className="fixed inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-screen w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
  </div>
   <ToastContainer/>
  <div className="md:mycontainer flex-grow w-full md:w-[70%] lg:w-[60%] mx-auto pb-10 relative">
    <header className="flex flex-col items-center mt-5">
      <div>
        <span className="text-green-600 text-3xl font-bold">&lt;</span>
        <span className="text-black font-semibold text-xl">op</span>
        <span className="text-green-600 text-2xl font-semibold">PASS</span>
        <span className="text-green-600 text-3xl font-bold">&gt;</span>
      </div>
      <div className="text-2xl font-semibold">Your password manager</div>
    </header>

    <div className="w-full flex flex-col items-center gap-3 mt-3">
      <div className="w-full flex justify-center">
        <input
          placeholder="Enter the website Url"
          ref={urlraf}
          name="UrlName"
          type="text"
          className="w-full mx-3 rounded-2xl border-2 border-green-300 px-3 h-[30px] sm:w-1/2"
          required={true}
        />
      </div>
      <div className="mx-4 flex justify-center gap-3 sm:w-1/2 sm:mx-0 relative">
        <input
          placeholder="Enter the usar name "
          ref={nameref}
          name="userName"
          type="text"
          className="px-3 border-2 w-1/2 border-green-300 rounded-2xl h-[30px]"
        />
        <input
          placeholder="Enter the password"
          ref={passraf}
          name="password"
          type={visible ? "text" : "password"}
          className="px-3 border-2 w-1/2 rounded-2xl border-green-300 h-[30px]"
          required={true}
        />
        {visible ? (
          <IoEyeSharp
            className="text-xl absolute right-5 top-1.5 sm:right-9 cursor-pointer"
            onClick={() => setvisible(false)}
          />
        ) : (
          <IoEyeOffSharp
            className="text-xl absolute right-5 top-1.5 sm:right-9 cursor-pointer"
            onClick={() => setvisible(true)}
          />
        )}
      </div>
      {
        isupdating ? <button
        className="flex justify-center items-center bg-blue-500 p-2 px-5 cursor-pointer rounded-2xl sm:px-7 border hover:scale-110 transition-transform duration-75"
        onClick={update}
      >
        <lord-icon
          src="https://cdn.lordicon.com/efxgwrkc.json"
          trigger="hover"
          style={{ width: 25, height: 25 }}
        ></lord-icon>
        Update
      </button> :
        <button
        className="flex justify-center items-center bg-green-500 p-2 px-5 cursor-pointer rounded-2xl sm:px-7 border hover:scale-110 transition-transform duration-75"
        onClick={handleAdd}
      >
        <lord-icon
          src="https://cdn.lordicon.com/efxgwrkc.json"
          trigger="hover"
          style={{ width: 25, height: 25 }}
        ></lord-icon>
        ADD
      </button>
      }
    </div>
    <div className="flex items-center flex-col gap-7 mt-6 w-full px-4">
      <span className="text-green-500 font-bold text-xl">Your passwords</span>
      {items.length === 0 ? (
        <div className="text-green-400 text-2xl">No password to show</div>
      ) : (
        <Table iteams={items} setItems={setItems} setisupdating={setisupdating} handleupdate={handleupdate}></Table>
      )}
    </div>
  </div>
      <Footer></Footer>
</div>
  );
};

export default Background;