/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import fetch from "fetch-everywhere";
import "../index.css";
import {
  Template,
  GetPath,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import { ExternalImage } from "../types/ExternalImage";
import SocialLinks from "../components/social-links";
import HomeLayout from "../components/layouts/home-layout";

/**
 * Not required depending on your use case.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "turtlehead-tacos",
};

/**
 * A local type for transformProps. This could live in src/types but it's generally
 * best practice to keep unshared types local to their usage.
 */
type ExternalImageData = TemplateProps & { externalImage: ExternalImage };

/**
 * Used to either alter or augment the props passed into the template at render time.
 * This function will be run during generation and pass in directly as props to the default
 * exported function.
 *
 * This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
 * source. This example calls a public API and returns the data.
 *
 * If the page is truly static this function is not necessary.
 */
export const transformProps: TransformProps<ExternalImageData> = async (
  data
) => {
  const url = import.meta.env.YEXT_PUBLIC_EXTERNAL_IMAGE_API_BASE_URL + "/2";
  const externalImage = (await fetch(url).then((res: any) =>
    res.json()
  )) as ExternalImage;
  return { ...data, externalImage };
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<ExternalImageData> = () => {
  return `index.html`;
};

// TODO: mention this to Andrew
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Yext Card Showcase",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

type ExternalImageRenderData = TemplateRenderProps & {
  externalImage: ExternalImage;
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `getStaticProps`.
 */
const Static: Template<ExternalImageRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  externalImage,
}) => {
  const renderGreeting = (): JSX.Element => (
    <div className="centered-container flex flex-col justify-center ">
      <h1 className="text-7xl font-black">Hey! How&apos;s it going?</h1>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-semibold mt-8">I&apos;m Aaron</h2>
          <p className="text-xl font-normal mt-2">
            Developer Evangelist @ Yext
          </p>
        </div>
        <div>
          <img
            className="rounded-full w-20"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGjT_PixNqeEg/profile-displayphoto-shrink_800_800/0/1586390843072?e=1666224000&v=beta&t=t44cL-o0qzBbGggmGrpAGcDbo90AcLmqStUkz6gijbQ"
          />
        </div>
      </div>
    </div>
  );

  const renderInfo = (): JSX.Element => (
    <div className="centered-container">
      <nav className=" py-10 hidden md:flex  items-center gap-8 text-4xl font-bold">
        <div>
          <a className="border-b-4">Home</a>
        </div>
        <div>
          <a className="hover:border-b-4">Blog</a>
        </div>
      </nav>
      <div className="px-8 py-8  bg-gray-200 rounded-2xl shadow-lg mt-8">
        <h2 className="font-bold text-xl">Introduction</h2>
        <p className="pt-2">
          I&apos;m a developer evangelist at Yext. I&apos;m here to help you
          build amazing things with Yext. Outside of work, I love to ski, read,
          listen to music, play video games, and spend time with my friends and
          listen to music, play video games, and spend time with my friends and
          family. I moved to NYC about a year ago and I&apos;m loving it.
        </p>
      </div>
      <div className="mt-4">
        <SocialLinks
          twitter="https://twitter.com/apav_dev"
          github="https://github.com/apav-dev"
          dev_to="https://dev.to/apavlick"
        />
      </div>
    </div>
  );

  return (
    <>
      <HomeLayout GreetingContent={renderGreeting} InfoContent={renderInfo} />
    </>
  );
};

export default Static;
