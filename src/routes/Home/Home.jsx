// import React from 'react'
import Footer from "../../components/Footer/Footer";
import Glary from "../../components/Glary/Glary";
import Header from "../../components/Header/Header";
import MentorSection from "../../components/MentorSection/MentorSection";
import OfferPage from "../../components/OfferComponents/OfferPage";
import WhatComponents from "../../components/WhatComponet/WhatComponents";

export default function Home() {
  return (
    <>
       <Header/>
       <OfferPage/>
       <WhatComponents/>
       <Glary/>
       <MentorSection/>
       <Footer/>
    </>
  )
}
