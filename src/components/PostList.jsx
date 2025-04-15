// components/PostList.jsx
import React from "react";
import { Post } from "./Post";

export const PostList = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.length === 0 ? (
        <p className="text-gray-500">유언이 아직 없습니다.</p>
      ) : (
        posts.map((post, i) => <Post key={i} {...post} />)
      )}
    </div>
  );
};
