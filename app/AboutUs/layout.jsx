import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import React from "react";

function AboutUsLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default AboutUsLayout;
