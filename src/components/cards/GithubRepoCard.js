import { StarOutlined, IssuesCloseOutlined } from "@ant-design/icons"
import moment from "moment"
import "../../assets/scss/GithubRepoCard.scss"


const GithubRepoCard = (props) => {
	//Get Repos Infos from Props
	const { Item } = props
	
	const Optmize = (total) => {
		if (total >= 1000)
			total = (total / 1000).toFixed(1).toString() + "K";
		return total;
	}

	return (
		<div className="card">
			<div className="thumb">
				<img src={Item?.owner?.avatar_url} alt={Item?.gravatar_id} />
			</div>
			<div className="infos">
				<div className="Title">{Item?.name}</div>
				<div className="desc">{Item?.description}</div>
				<div className="action">
					<div className="details">
						<StarOutlined /> Stars: {Optmize(Item?.stargazers_count)}
					</div>
					<div className="details">
						<IssuesCloseOutlined /> Issues: {Optmize(Item?.open_issues_count)}
					</div>
					<div className="datesection">
						<div className="date">
							Submitted {moment(Item?.created_at).fromNow()} by {Item?.owner?.login}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default GithubRepoCard