import react from "react"
import { StarOutlined, IssuesCloseOutlined } from "@ant-design/icons"
import moment from "moment"
import "../assets/scss/GithubRepoCard.scss"


const GithubRepoCard = (props) => {
	//Get Repo Info from Props
	const {Title, Descreption, Avatar, StarsNumber, IssuesNumber, Created_At} = props

	return (
		<div className="card">
			<div className="thumb">
				<img
					src="https://images.unsplash.com/photo-1631034602548-63326fd3764b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1535&q=80"
				/>
			</div>
			<div className="infos">
				<div className="Title">Lorem, ipsum</div>
				<div className="desc">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</div>
				<div className="action">
					<div className="details">
						<StarOutlined /> Stars: 110k
					</div>
					<div className="details">
						<IssuesCloseOutlined /> Issues: 60k
					</div>
					<div className="datesection">
						<div className="date">
							Submitted {moment().fromNow()} by likwaaak
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default GithubRepoCard