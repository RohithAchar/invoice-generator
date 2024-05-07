import React from "react";

const MainForm = ({ formDetails, setFormDetails }) => {
  const handleInvoiceNumber = (e) => {
    setFormDetails((previous) => {
      return { ...previous, invoiceNumber: e.target.value };
    });
  };
  const handleDate = (e) => {
    setFormDetails((previous) => {
      return { ...previous, dueDate: e.target.value };
    });
  };

  return (
    <div className="basis-1/2 border-2 p-5">
      <div className="flex flex-row justify-between">
        <div>
          <p>
            Current Date:{" "}
            {`${formDetails.currentDate.getDate() + 1}/${
              formDetails.currentDate.getMonth() + 1
            }/${formDetails.currentDate.getFullYear()}`}
          </p>
          <p>
            Due Date:{" "}
            <input
              className="bg-slate-200"
              type="date"
              onChange={handleDate}
              value={formDetails.dueDate}
            />
          </p>
        </div>
        <p>
          Invoice Number:{" "}
          <input
            type="number"
            className="input input-bordered h-[35px] w-[80px] pl-2"
            value={formDetails.invoiceNumber}
            onChange={handleInvoiceNumber}
          />
        </p>
      </div>
    </div>
  );
};

export default MainForm;
