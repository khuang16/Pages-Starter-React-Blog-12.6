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
      <div className="flex md:fixed min-h-[30vh] md:h-full top-0 w-full md:w-1/2 bg-gray-600 text-gray-50 pt-[120px]">
        {GreetingContent && <GreetingContent />}
      </div>
      <div className="md:absolute md:right-0 md:w-1/2 md:pt-[120px]">
        <div className="w-full pb-[145px] md:min-h-screen text-gray-800">
          {InfoContent && <InfoContent />}
          <Footer footerContainerStyle="absolute bottom-0" />
        </div>
      </div>
      <Footer footerContainerStyle="block md:hidden absolute bottom-0" />
    </PageLayout>
  );
};

export default HomeLayout;
