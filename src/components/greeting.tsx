import * as React from "react";
import { Image } from "@yext/pages/components";

interface GreetingProps {
  name: string;
  role?: string;
  headshot?: string;
}

const Greeting = ({ name, role, headshot }: GreetingProps): JSX.Element => {
  return (
    <div className="px-5 md:px-14 flex flex-col">
      <div className="text-7xl font-black">Hey there.</div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold mt-8">I&apos;m {name}</h2>
          {role && <p className="text-xl font-normal mt-2">{role}</p>}
        </div>
        {headshot && (
          <Image
            className="rounded-full"
            image={headshot}
            layout={"aspect"}
            aspectRatio={1}
            width={80}
          />
        )}
      </div>
    </div>
  );
};

export default Greeting;
