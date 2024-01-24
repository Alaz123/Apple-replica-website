import React, { useState, useEffect } from "react";

function YoutubeVideos() {
	const [youTubeVideos, setVideos] = useState([]);

	useEffect(() => {
		fetch(
			"https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyBDepaXmJkRgzmYWuN14f1xVzIzaTT6bzQ"
		)
			.then((response) => response.json())
			.then((data) => {
				const videos = data.items;
				setVideos(videos);
			})
			.catch((error) => {
				console.error("Error fetching YouTube videos:", error);
			});
	}, []);

	return (
		<section className="youtubeVideosWrapper">
			{" "}
			<div className="allVideosWrapper">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<div className="title-wraper">
								<br />
								Latest Videos <br />
								<br />
							</div>
						</div>

						{youTubeVideos?.map((singleVideo, i) => {
							let vidId = singleVideo.id.videoId;
							let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
							let videoWrapper = (
								<div key={i} className="col-sm-12 col-md-6 col-lg-4">
									<div className="singleVideoWrapper">
										<div className="videoThumbnail">
											<a href={vidLink} target="_blank" rel="noreferrer">
												<img
													src={singleVideo.snippet.thumbnails.high.url}
													alt={singleVideo.snippet.thumbnails.high.url}
												/>
											</a>
										</div>
										<div className="videoInfoWrapper">
											<div className="videoTitle">
												<a href={vidLink} target="_blank" rel="noreferrer">
													{singleVideo.snippet.title}
												</a>
											</div>
											<div className="videoDesc">
												{singleVideo.snippet.description}
											</div>
										</div>
									</div>
								</div>
							);
							return videoWrapper;
						})}
					</div>
				</div>
			</div>
			<br />
		</section>
	);
}

export default YoutubeVideos;
