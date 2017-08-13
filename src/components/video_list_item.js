import React from 'react';

const VideoListItem = ({video}) => {
  console.log(video); //video is gathered from the parent (VideoList)
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div>
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoListItem;