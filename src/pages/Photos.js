import React, {useContext} from "react"

import Image from "../components/Image.js"
import {Context} from "../Context.js"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos