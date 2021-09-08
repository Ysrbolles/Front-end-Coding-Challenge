import Axios from "axios"
const URL = "https://api.github.com/search/repositories?q=created:>"


const GithubRepos = {
	//Get Github repositories
	getGithubRepos(pageNumber) {
		return new Promise((resolve, reject) => {
			const StarterDate = GithubRepos.GenerateStarDate()
			Axios.get(URL + `${StarterDate}&sort=stars&order=desc&page=${pageNumber}`)
				.then(res => {
					res?.status === 200 && resolve(res?.data)
				})
				.catch(err => {
					if (err.response.status === 403) {
						const res = err.response.data;
						reject(res)
					} else reject(err);
				})
		})
	},
	//Generate the start date to get Github repositories created in the last 30 days
	GenerateStarDate() {
		let date = new Date();
		date.setDate(date.getDate() - 30);
		let month = (date.getMonth() + 1).toString();
		let day = date.getDate().toString();
		if (day.length < 2)
			day = "0" + day;
		if (month.length < 2)
			month = "0" + month;
		const stringDate = date.getFullYear() + "-" + month + "-" + day;
		return stringDate;
	}
}

export default GithubRepos