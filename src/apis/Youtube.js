import axios from "axios";

const KEY = "AIzaSyDpjliciIyBScH08TmT-kqjTJ3YP5uJ4-c";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
