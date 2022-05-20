import Head from "next/head";
import React, { useState } from "react";
import Frequently from "./Component/frequently/frequently";
import Price from "./Component/Pricelist/price";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
  
      <Price />

      <Frequently />
    </div>
  );
}
