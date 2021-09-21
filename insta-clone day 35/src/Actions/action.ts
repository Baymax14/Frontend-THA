import axios from "axios";

export interface userType {
	username: string;
	profilePicture: string;
}

// export interface storyType {
// 	profile: string;
// }

const updateUser = () => {
	return (dispatch: any) => {
		axios.get("/data/user.json").then((res) => {
			const data = res.data;
			dispatch({
				type: "UPDATE_USER",
				payload: data,
			});
		});
	};
};

export { updateUser };