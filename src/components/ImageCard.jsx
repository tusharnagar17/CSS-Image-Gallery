import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img id={image.id} className="w-50 h-auto" src={image.webformatURL} alt="" />
        <div className="px-6 py-3">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
        <div className="px-3 py-1">
          {tags.map((tag) => (
            <span className="inline-block bg-gray-300 text-gray-900 text-semibold rounded-full px-3 py-1 text-sm mr-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCard;
