import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map(eachVideo => {
		return (
			<VideoItem
				onVideoSelect={onVideoSelect}
				video={eachVideo}
				key={eachVideo.id.videoId}
			/>
		);
	});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
