import React, { Component } from 'react';

let currentPage = 1;

export default class CategoryList extends Component {

	showCategoryDetails = (name) => {
		this.props.history.push('/category-detail');
		this.props.setCategoryDetailPage(name);
		console.log('I was clicked!', this.props);
	}

	renderList = () => {
		console.log('Yupp!', this.props.appstate);
		if(this.props.appstate.data.categories && this.props.appstate.data.categories.length > 0) {
		  return this.props.appstate.data.categories.slice(this.props.appstate.pagination.start, this.props.appstate.pagination.end).map((val, index) => {
		    return (
		      <li key={val.name} className="li-class">
		        <div className="d-flex flex-column">
		          <span className="align-self-heading" onClick={() => this.showCategoryDetails(val.name)}>
		            {val.name}
		          </span>
		          <hr style={{'width' : '100%'}}/>
		          <ul className="d-flex detail-ul-class ul-class-scrollbar">
		            {this.renderDeepList(val.models)}
		          </ul>
		        </div>
		      </li>
		    );
		  });
		}
		else {
		  return this.props.appstate.test;
		}
	}

	renderDeepList = (data) => {
		return data.map((value) => {
		  return (
		    <li key={value.name} className="li-class d-flex flex-column">
		        <span style={{'marginBottom' : '2rem'}}>
		          {value.name}
		        </span>
		        <img src={value.thumb} className="img-class"/> 
		    </li>
		  );
		});
	}

	renderPaginationLinks = () => {
		let pagesLinks = [];
		if(this.props.appstate.data.categories && this.props.appstate.data.categories.length > 0) {
		  let noOfPages = Math.ceil(this.props.appstate.data.categories.length / this.props.appstate.pagination.pageLength);
		  for(let i = 1; i <= noOfPages; i++) {
		    pagesLinks.push(<li key={i} style={{'width': '50px', 'marginRight': '50px'}} className={currentPage === i ? 'activePage' : ''}><a onClick={() => this.setPage(i)}>{i}</a></li>);
		  }
		}
		return pagesLinks;
	}

	setPage = (pageNo) => {
		currentPage = pageNo;
		let start = (pageNo - 1) * this.props.appstate.pagination.pageLength;
		let end = start + this.props.appstate.pagination.pageLength;
		this.props.setPaginationPage(start, end);
	}


	render() {
		return (
			<span>
				<ul className="ul-class">
					{this.renderList()}
				</ul>
				<div className="pagination-links-div d-flex justify-content-end">
	              <ul className="detail-ul-class d-flex ul-class-scrollbar">
	                {this.renderPaginationLinks()}
	              </ul>
	            </div>
			</span>
		);
	}
}