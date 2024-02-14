// CustomInput.js
import React, { useState } from 'react';

const CustomInput = ({ labelText, inputType, tagType }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value.trim()) {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`flex-[1] px-3 py-2 border rounded-md relative ${isFocused || value ? 'border-gray-700' : 'border-gray-400'} transition-all duration-300`}>
      {tagType == 'input' ? (
        <>
            <label className={`label absolute translate-x-[-8%] translate-y-[-50%] z-0 pointer-events-none ${isFocused || value ? 'top-[0%] left-[6%] bg-white px-2 text-gray-700 text-sm' : 'text-md top-[50%] left-[8%] text-gray-400'} transition-all duration-500`}>
            {labelText}
        </label>
            <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className='input w-full z-10 pl-[0.5rem]'
            type={inputType}
            required
        />
      </>
      ) : tagType == 'textarea' ? (
        <>
            <label className={`label absolute translate-x-[-4%] translate-y-[-50%] z-0 pointer-events-none ${isFocused || value ? 'top-[0%] left-[3%] bg-white px-2 text-gray-700 text-sm' : 'text-md top-[12%] left-[4%] text-gray-400'} transition-all duration-500`}>
            {labelText}
        </label>
            <textarea
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className='input w-full z-10 pl-[0.5rem]'
            value={value}
            rows={10}
            cols={12}
            />
        </>
      ) : null}

    </div>
  );
};

export default CustomInput;
