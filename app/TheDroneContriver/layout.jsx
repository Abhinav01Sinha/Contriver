import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function DroneLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DroneLayout;
