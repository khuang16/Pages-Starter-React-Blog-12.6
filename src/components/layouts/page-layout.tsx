import * as React from "react";
import Header from "../header";

type Props = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen relative font-display ">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
