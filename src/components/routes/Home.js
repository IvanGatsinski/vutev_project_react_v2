import React from "react";
import Slideshow from "../SlideGallery/SlideShow";
import HomePaperSheet from "../layouts/PaperSheet"

const Home = ({ slideGalleryItems }) => {
    let descriptionHeader = "Ако желаете може да разгледате индивидуални артикули от всичките наши стоки,като натиснете върху снимка от галерията по-долу или да разгледате различни категории артикули от менюто горе,като изберете секция `Продукти`.";
    return (<main>
        <section>
            <HomePaperSheet description={descriptionHeader} />
                    <Slideshow allItems={slideGalleryItems} />
        </section>
    </main>)
}
export default Home;