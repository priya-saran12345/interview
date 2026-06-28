import Image from "next/image";
import Banner from "./HomeComponent/Banner";
import ProcessSteps from "./HomeComponent/ProcessSteps";
import WhatWeDo from "./HomeComponent/WhatWeDo";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import ContactUsPage from "./HomeComponent/Contact";
export default function Home() {
  return (
<div>
        <Header/>

  <Banner></Banner>
  <ProcessSteps/>
  <WhatWeDo/>
  <ContactUsPage/>
      <Footer/>
</div>  );
}
