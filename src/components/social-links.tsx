import * as React from "react";
import DevToIcon from "../icons/DevToIcon";
import GithubIcon from "../icons/GithubIcon";
import TwitterIcon from "../icons/TwitterIcon";

export interface SocialLinksProps {
  twitter?: string;
  github?: string;
  dev_to?: string;
  // TODO: Add more social links
}

const SocialLinks = ({
  twitter,
  github,
  dev_to,
}: SocialLinksProps): JSX.Element => (
  <div className="flex gap-4 py-4">
    {twitter && (
      <a href={twitter} target="_blank" rel="noreferrer">
        <div className="rounded-full w-12 h-12 bg-gray-200 flex justify-center items-center shadow-lg">
          <TwitterIcon />
        </div>
      </a>
    )}
    {github && (
      <a href={github} target="_blank" rel="noreferrer">
        <div className="rounded-full w-12 h-12 bg-gray-200 flex justify-center items-center shadow-lg">
          <GithubIcon />
        </div>
      </a>
    )}

    {dev_to && (
      <a href={dev_to} target="_blank" rel="noreferrer">
        <div className="rounded-full w-12 h-12 bg-gray-200 flex justify-center items-center shadow-lg">
          <DevToIcon />
        </div>
      </a>
    )}
  </div>
);

export default SocialLinks;
