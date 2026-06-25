import Image from "next/image";
import Banner from "./HomeComponent/Banner";
import ProcessSteps from "./HomeComponent/ProcessSteps";
import WhatWeDo from "./HomeComponent/WhatWeDo";
export default function Home() {
  return (
<div>
  <Banner></Banner>
  <ProcessSteps/>
  <WhatWeDo/>
</div>  );
}
