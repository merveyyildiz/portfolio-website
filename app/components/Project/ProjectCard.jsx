import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Tag from "../Tag/Tag";
import css from "./ProjectCard.module.scss";
import cx from "classnames";

const ProjectCard = ({ imgUrl, title, tags, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className={css.imageContainer}
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className={css.imageCard}>
          {gitUrl ? (
            <Link href={gitUrl} className={cx(css.gitLink, css.link)}>
              <CodeBracketIcon className={css.icon} />
            </Link>
          ) : null}
          {previewUrl ? (
            <Link href={previewUrl} className={css.link}>
              <EyeIcon className={css.icon} />
            </Link>
          ) : null}
        </div>
      </div>
      <div className={css.textCard}>
        <h5 className={css.title}>{title}</h5>
        {tags.map((tagName, index) => (
          <Tag key={index} tagName={tagName} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
