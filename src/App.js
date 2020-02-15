import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableauClass from "./VizzClass";
import TableauFunc from "./VizzFunc";

function App() {
  const notifyA = () => {
    return toast("Notify A", { toastId: "A" });
  };

  const notifyB = () => {
    return toast.success("Notify B", { toastId: "B" });
  };

  const errHandle = () => {
    return toast.error("ERROR HANDLING MESSAGE", { toastId: "err" });
  };

  console.log("this is working as desred");

  return (
    <div className="App">
      <ToastContainer
        closeButton={false}
        position="top-right"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
        transition={Slide}
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TableauClass /> */}
        <br />
        <TableauFunc />
        <br />
        <button onClick={() => notifyA()}>Notify A !</button>
        <button onClick={() => toast.dismiss("A")}>DISMISS</button>
        <br />
        <button onClick={() => notifyB()}>Notify B !</button>
        <button onClick={() => toast.dismiss("B")}>DISMISS</button>
        <br />
        <button onClick={() => errHandle()}>ERROR</button>
        <button onClick={() => toast.dismiss("err")}>DISMISS</button>
        <br />
        <button onClick={() => toast.dismiss()}>DISMISS ALL</button>
      </header>
    </div>
  );
}

export default App;
