import React from 'react'

const GenderCheck = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className='flex'>
            <div className="form-control mx-5">
                <label className={`cursor-pointer gap-2 label ${selectedGender === "male" ? "selected" : "" }`} >
                    <span className="label-text text-white">Male</span>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-warning" 
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control mx-5">
                <label className={`cursor-pointer gap-2 label ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text text-white">Female</span>
                    <input
                        type="checkbox"
                        className="checkbox checkbox-warning"
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheck


/* starter code for gendercheck 

import React from 'react'

const GenderCheck = () => {
    return (
        <div className='flex'>
            <div className="form-control mx-5">
                <label className="cursor-pointer gap-2  label">
                    <span className="label-text text-white">Male</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-warning" />
                </label>
            </div>
            <div className="form-control mx-5">
                <label className="cursor-pointer gap-2 label">
                    <span className="label-text text-white">Female</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-warning" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheck
*/