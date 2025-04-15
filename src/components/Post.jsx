// components/Post.jsx
import React from "react";

export const Post = ({ title, body, media, date }) => {
  const isYouTube = media.includes("youtube.com") || media.includes("youtu.be");

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700 whitespace-pre-wrap mt-2">{body}</p>
      {media && (
        <div className="mt-4">
          {isYouTube ? (
            <iframe
              className="w-full aspect-video"
              src={media.replace("watch?v=", "embed/")}
              allowFullScreen
              title="유튜브 영상"
            />
          ) : (
            <img src={media} alt="첨부 이미지" className="max-w-full rounded" />
          )}
        </div>
      )}
      <p className="text-sm text-gray-400 mt-2">{date}</p>
    </div>
  );
};
