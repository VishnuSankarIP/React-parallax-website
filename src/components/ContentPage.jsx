import React from 'react'
import { Parallax } from 'react-parallax'

function ContentPage() {
  return (
    <div>
      <div className="section2 " style={{ height: '50vh' }} >
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <h1 className='ms-5 mt-5' style={{ fontFamily: 'Anton' }}>
              Arctic Scoops
            </h1>
            <p className='justify-content-center  ms-5 mt-5 me-5' style={{ color: "black", textAlign: 'justify' }}>
              Arctic Scoops is a new ice cream brand that offers a unique and interactive ice cream experience. Their concept is centered around self-serve frozen fruit and ice cream machines, allowing customers to create their own customized treats by choosing from a variety of flavors, toppings, and mix-ins. Arctic Scoops prides itself on using high-quality ingredients and promoting healthy options with their low-fat and sugar-free frozen fruit selections. With a modern and minimalistic atmosphere, Arctic Scoops has become a favorite for families, friends, and ice cream lovers alike.
            </p>
          </div>
          <div className="col-lg-3"></div>
        </div>

      </div>

      <div className="container">
        <Parallax
          bgImage=
          "Third-section.jpg "
          strength={600} style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div style={{ height: 400 }}>

          </div>
        </Parallax>
        <Parallax
          bgImage=
          "Fourth-section.png"
          strength={400} style={{ marginTop: "5rem", 
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div style={{ height: 400 }}>

          </div>
        </Parallax>

        <Parallax
          bgImage=
          "Fifth-section.jpg"
          strength={500} style={{
            marginTop: "5rem", height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
          <div style={{ height: 400 }}>

          </div>
        </Parallax>
      </div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <h1 className='ms-5 mt-5 me-5' style={{ fontFamily: 'Anton' }}>
            Design concept of Arctic Scoops
          </h1>
          <p className='justify-content-center  ms-5 mt-5 me-5' style={{ color: "black", textAlign: 'justify' }}>
            For the branding of Arctic Scoops, I propose a sleek and modern design concept in black and beige colors. The logo will feature a stylized mininalistic and the brand's commitment to using high-quality, fresh ingredients. The typography will be clean and bold, with the brand name "Arctic Scoops" in uppercase letters. The color scheme of black and beige will create a sophisticated and timeless look, while also evoking a sense of coldness and freshness, reminiscent of the Arctic. The packaging will feature minimalist designs with white backgrounds and different icons from the various ice cream flavors. Overall, this design concept will convey a sense of luxury, innovation, and sustainability, making Arctic Scoops stand out in a crowded market.
          </p>
        </div>
        <div className="col-lg-3"></div>
      </div>

    </div>
  )
}

export default ContentPage
