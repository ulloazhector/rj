import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';

const Banner = ({category}) => {

    const [imgUrl, setImgUrl] = useState(``)
    const [loading, setLoading] = useState(true);


    
    useEffect(() => {
        let isCancelled = false

        setLoading(true)
        const storage = getStorage()
        const imagesRef = ref(storage, `beer-categories/${category?.toLowerCase()}.jpg`)
        const getUrl = async() => {
            const url = await getDownloadURL(imagesRef)
            if(!isCancelled){
                setImgUrl(url)
                setLoading(false)
            }
        }

        getUrl()
        // clean up
        return () => {
            isCancelled = true
        }

    }, [category])






    return (
        <>
            {
                !loading &&
                    <div id="carouselExampleControls" style={{position: `relative`,maxHeight: 250, overflow: `hidden`}} className="carousel slide" data-bs-ride="carousel">
                        <h2 
                            className='display-3'
                            style={{
                                color: `white`,
                                zIndex: 1,
                                textShadow: `2px 1px 8px #000000`,
                                position: `absolute`,
                                top: `35%`,
                                left: `20%`
                            }}>
                            {category}
                        </h2>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div>
                                    <img src={imgUrl} className="d-block w-100" alt={category} style={{objectFit: `cover`}} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Banner;
