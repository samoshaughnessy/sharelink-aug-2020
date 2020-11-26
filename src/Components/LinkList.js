import React from "react";

export default function LinkList(props) {
  return (
    <div>
      {props.links.map((link, i) => (
        <div key={i}>
          <a href={link.url} rel="noreferrer" target="_blank">
            {link.name}{" "}
          </a>
          {link.tags.map((tag, j) => (
            <span key={j}>{tag.name}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
