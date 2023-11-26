import { Oval } from "react-loader-spinner";

import "./loader.css"
const Loader =()=>{
  return (
    
        <div className="loader">
          <Oval
            height={50}
            width={50}
            color="#fff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#c11119"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
          <p>Loading...</p>
        </div>)
}
export default Loader