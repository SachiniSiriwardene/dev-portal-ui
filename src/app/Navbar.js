'use client'

import { useParams } from "react-router-dom";

function Navbar() {
    const { orgName, component } = useParams();

    return (
        <>
        <div className="div-2">
          <div className="div-5"> <a href= {"/" + orgName} >Home</a></div>
          <div className="div-5">  <a href= {"/" + orgName + "/components"} > Components </a></div>
          <div className="div-6">Solution</div>
          <div className="div-7">Community</div>
          <div className="div-8">Monetization</div>
          <div className="div-9">Support</div>
          <div className="div-10">Login</div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/276ba13412807b0e9591eaf29b8f0cb956283c318d06ec86db686186efcbbf96?apiKey=5054b86bb369459e857ad81bc8b6e736&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/276ba13412807b0e9591eaf29b8f0cb956283c318d06ec86db686186efcbbf96?apiKey=5054b86bb369459e857ad81bc8b6e736&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/276ba13412807b0e9591eaf29b8f0cb956283c318d06ec86db686186efcbbf96?apiKey=5054b86bb369459e857ad81bc8b6e736&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/276ba13412807b0e9591eaf29b8f0cb956283c318d06ec86db686186efcbbf96?apiKey=5054b86bb369459e857ad81bc8b6e736&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/276ba13412807b0e9591eaf29b8f0cb956283c318d06ec86db686186efcbbf96?apiKey=5054b86bb369459e857ad81bc8b6e736&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/276ba13412807b0e9591eaf29b8f0cb956283c318d06ec86db686186efcbbf96?apiKey=5054b86bb369459e857ad81bc8b6e736&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/276ba13412807b0e9591eaf29b8f0cb956283c318d06ec86db686186efcbbf96?apiKey=5054b86bb369459e857ad81bc8b6e736&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/276ba13412807b0e9591eaf29b8f0cb956283c318d06ec86db686186efcbbf96?apiKey=5054b86bb369459e857ad81bc8b6e736&"
            className="img-2"
          />
        </div>
        </>
    )
}
export default Navbar;