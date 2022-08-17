import * as React from "react";
import Footer from "../footer";
import PageLayout from "./page-layout";

interface HomeLayoutProps {
  GreetingContent?: () => JSX.Element;
  InfoContent?: () => JSX.Element;
}

const HomeLayout = ({ GreetingContent, InfoContent }: HomeLayoutProps) => {
  return (
    <PageLayout>
      <div className="flex md:fixed min-h-[30vh] md:h-full top-0 w-full md:w-1/2 bg-gray-600 text-gray-50">
        {GreetingContent && <GreetingContent />}
      </div>
      <div className="md:fixed relative overflow-y-auto md:right-0 w-full md:w-1/2 min-h-full">
        <div className="md:pb-[145px]">{InfoContent && <InfoContent />}</div>
        <Footer footerContainerStyle="md:absolute bottom-0" />
      </div>
    </PageLayout>
  );
};

export default HomeLayout;
