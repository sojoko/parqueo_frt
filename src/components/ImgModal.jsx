import React from "react";

function ImgModal(props) {
  return (
      <div
       className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center"
      >
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <img src={props.img} alt="" />
         
          </div>
        </div>
      </div>
    
  );
}
export { ImgModal };
