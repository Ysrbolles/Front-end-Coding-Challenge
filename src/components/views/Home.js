import React, { useEffect, useState } from "react"
import { Empty, Spin } from "antd"
import "../../assets/scss/Home.scss"
import GithubRepoCard from "../cards/GithubRepoCard"
import GithubRepos from "../../services/GithubRepos"
import InfiniteScroll from "react-infinite-scroll-component"
import Heading from "../cards/Heading"
import Swal from 'sweetalert2'

const Home = () => {
	const [pageNumber, setPageNumber] = useState(1)
	const [result, setResult] = useState([])
	const [loader, setLoader] = useState(true)


	useEffect(() => {
		getGithubRepos()
		// eslint-disable-next-line
	}, [pageNumber])

	//Get Github Repos first time
	const getGithubRepos = () => {
		GithubRepos.getGithubRepos(pageNumber)
			.then(res => {
				setLoader(false)
				res?.items?.length && setResult([...result, ...res?.items])
			})
			.catch(err => {
				setLoader(false)
				Swal.fire({
					title: 'Error!',
					text: err?.message,
					icon: 'error',
					confirmButtonText: 'Ok'
				})
			})
	}

	const getNextPage = () => {
		setPageNumber(pageNumber + 1)
	}

	return (
		<div className="home">
			<div className="head">
				<Heading color="primary" text="Most followed Github repositories created in the last 30 days" />
			</div>
			{loader && <Spin className="loading" />}
			{result?.length && !loader ? <div className="content">
				<InfiniteScroll
					dataLength={result?.length}
					next={getNextPage}
					loader={<Spin style={{ marginTop: "20px" }} />}
					scrollableTarget="sessions"
					scrollThreshold={1}
					hasMore={true}
				>
					{result?.map((item) => {
						return (<GithubRepoCard Item={item} key={item?.id} />)
					})}
				</InfiniteScroll>
			</div> : <Empty style={{ marginTop: "100px" }} />}
		</div>
	)
}


export default Home