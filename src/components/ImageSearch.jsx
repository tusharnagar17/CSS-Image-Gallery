import React, { useState } from "react";

const ImageSearch = ({searchText}) => {
  const [text, setText] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    searchText(text);
    console.log(text);
}

  return (
    <div className="max-w-sm rounded overflow-hidden mx-auto py-5">
      <form onSubmit={submitForm}className="w-full max-w-sm">
        <div className="flex items-center border-teal-500 py-2">
          <input onChange={(e)=> setText(e.target.value)} className="appearance-none bg-transparent border-b border-b-2 border-none w-full text-gray-700 mr-3 py-1 px-2 leaging-tight focus:outline-none" type="text" placeholder="Search Image...." />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
            Search
        </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
