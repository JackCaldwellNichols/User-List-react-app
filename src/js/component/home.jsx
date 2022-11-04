import React, {Component} from "react";


//create your first component
class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			users: [],
			page: 1,
			totalPages: 0,
		}
	}
	componentDidMount() {
		this.changePage(this.state.page);
	}

	changePage(page) {
		const url = `https://reqres.in/api/users?page=${page}`;

	fetch(url)
		.then(res => res.json())
		.then(res => this.setState({users: res.data, page: page, totalPages: res.total_pages}))
	}

	render() {
		const {users} = this.state;
		return (
			<div className="container">
				<div className="bg-light py-5 px-4 mb-4 border">
					<h1 className="ps-2">User list</h1>
				</div>
				<div className="users">
					{users.map((user) => (
						<div className="card"  key={user.id}>
						<img src={user.avatar} className="card-img" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{user.first_name} {user.last_name}</h5>
							<p>{user.email}</p>
						</div>
					</div>
					))}
				</div>

				<nav className="Page navigation example d-flex justify-content-center mt-5">
					<ul className="pagination">
						<li className="page-item">
							<button type ="button" 
									className="btn btn-link" 
									onClick={() => this.changePage(this.state.page - 1)}
									disabled = {this.state.page === 1 ? true : false}>
								Prev
							</button>
						</li>
						<li className="page-item"><button type = "button" className="btn btn-link">{this.state.page}</button></li>
						<li className="page-item">
							<button type="button" 
									className="btn btn-link" 
									onClick={() => this.changePage(this.state.page + 1)}
									disabled = {this.state.page >= this.state.totalPages ? true : false}>
								Next
							</button>
						</li>
					</ul>
				</nav>
			</div>
		)
	}


}

export default Home;
