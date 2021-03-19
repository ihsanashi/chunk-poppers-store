import React from 'react';

const LabelWithInput = ({
  name,
  type,
  labelTitle,
  placeholderText,
  optionalMessage,
  pattern,
  required,
}) => {
  return (
    <label>
      <div className='flex flex-row justify-between items-center'>
        <span
          htmlFor={name}
          className='font-medium text-base text-gray-800 inline-block mb-2'
        >
          {labelTitle}
        </span>
        <p className='italic text-sm font-normal text-gray-600'>
          {optionalMessage}
        </p>
      </div>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        placeholder={placeholderText}
        pattern={pattern}
        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
      />
    </label>
  );
};

export default LabelWithInput;
