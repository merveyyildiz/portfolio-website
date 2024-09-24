import React from 'react'

const Tag = ({tagName}) => {
  return (
    <span
      className="text-slate-400 text-sm mx-1 inline-block rounded-full border mb-2 py-1 px-2 border-slate-100"
    >
      {tagName}
    </span>
  );
}

export default Tag