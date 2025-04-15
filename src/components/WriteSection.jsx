// components/WriteSection.jsx
import React, { useState } from "react";

export const WriteSection = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [media, setMedia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;

    onSubmit({ title, body, media, date: new Date().toLocaleString() });

    setTitle("");
    setBody("");
    setMedia("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-100 shadow-lg rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          📝 당신의 마지막 말을 남겨주세요
        </h2>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-600">
            제목
          </label>
          <input
            type="text"
            placeholder="예: 내가 세상을 떠나기 전에..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-600">
            내용
          </label>
          <textarea
            placeholder="당신의 생각, 감정, 기억들을 적어보세요."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            className="w-full p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-600">
            이미지 또는 유튜브 링크 (선택)
          </label>
          <input
            type="url"
            placeholder="https://..."
            value={media}
            onChange={(e) => setMedia(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            유언 남기기
          </button>
        </div>
      </form>
    </div>
  );
};
