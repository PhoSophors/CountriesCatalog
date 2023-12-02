/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef }  from 'react'
import Lottie from 'lottie-react';
import loading from "../../assets/Animation_loading.json";

const Loading = () => {
 
  return (
    <div className=" loading-page item-center jsutify-center ">
      <div className="text-center flex mx-auto item-center jsutify-center">
        <Lottie animationData={loading} />
      </div>
  </div>
  )
}

export default Loading