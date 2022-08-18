import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
  return <div className="min-h-screen relative font-display ">{children}</div>;
};

export default PageLayout;
