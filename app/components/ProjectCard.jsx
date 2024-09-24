import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Tag from "./Tag";

const ProjectCard = ({ imgUrl, title, tags, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-80 rounded-t-lg relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] hidden bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {gitUrl ? (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-3 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white " />
            </Link>
          ) : null}
          {previewUrl ? (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white " />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="text-white rounded-b-xl pt-3 bg-[#181818] py-6 px-4 h-32 md:h-60 lg:h-32">
        <h5 className="font-xl font-semibold mb-4">{title}</h5>
        {tags.map((tagName, index) => (
          <Tag key={index} tagName={tagName} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
