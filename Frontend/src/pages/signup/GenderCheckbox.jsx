import React from "react";

function GenderCheckbox({onCheckboxChange,selectedGender}) {
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer  ${selectedGender ==="Male"? "selected":""}`}>
          <span className="label-text">Male</span>
          <input
         type="checkbox"
         className="checkbox border-slate-900 checkbox-info"
         checked={selectedGender==="Male"}
         onChange={()=>onCheckboxChange("Male")}
         />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender ==="Female"? "selected":""}`}>
          <span className="label-text">Female</span>
          <input
         type="checkbox"
         className="checkbox border-slate-900 checkbox-secondary"
         checked={selectedGender==="Female"}
         onChange={()=>onCheckboxChange("Female")}
         />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
