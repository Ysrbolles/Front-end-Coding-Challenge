import react from "react"
import { Spin } from "antd"
import "../assets/scss/Home.scss"
import GithubRepoCard from "./GithubRepoCard"

const Home = () => {

	
	return (
		<div className="home">
			{/* <Spin className="loading"/> */}
			<GithubRepoCard />
		</div>
	)
}


export default Home