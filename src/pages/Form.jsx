import React, { useState } from "react";
import MainForm from "../components/MainForm";
import SideForm from "../components/SideForm";

const Form = () => {
  const [formDetails, setFormDetails] = useState({
    currentDate: new Date(),
    invoiceNumber: 1,
    dueDate: null,
    billTo: {
      name: "",
      email: "",
      billingAddress: "",
    },
    billFrom: {
      name: "",
      email: "",
      billingAddress: "",
    },
    items: [],
    subTotal: 0,
    discount: 0,
    tax: 0,
    total: 0,
    notes: "",
  });

  return (
    <div className="flex flex-row justify-around">
      <MainForm formDetails={formDetails} setFormDetails={setFormDetails} />
      <SideForm formDetails={formDetails} setFormDetails={setFormDetails} />
    </div>
  );
};

export default Form;
