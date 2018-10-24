import React, { Component } from 'react';
import '../App.css';

export default class CategoryDetail extends Component {
	
	showCategoryList = () => {
		this.props.history.push('/');
	}

	renderList = () => {
		let selectedList = this.props.appstate.selectedCategory.categoryList[0] ? this.props.appstate.selectedCategory.categoryList[0].models : '';
		if(selectedList && selectedList.length > 0) {
			return selectedList.map((val) => {
				return (
					<li className="li-class d-flex flex-column" key={val.name} onClick={() => this.props.setSingleModelDetail(val)}>
						<span>
							{val.name}
						</span>
						<img src={val.thumb} className="img-class" />
					</li>
				);
			});
		}
	}

	renderName = () => {
		let selectedCat = this.props.appstate.selectedCategory.categoryList[0] ? this.props.appstate.selectedCategory.categoryList[0].name : '';
		let selectedCatModelImg = this.props.appstate.selectedCategory.currentModel.img ? this.props.appstate.selectedCategory.currentModel.img : '';
		let selectedCatModelDesc = this.props.appstate.selectedCategory.currentModel.desc ? this.props.appstate.selectedCategory.currentModel.desc : '';
		console.log(selectedCat);
		return (
			<div className="d-flex flex-column align-items-center">
				<h2>{selectedCat}</h2>
				<img src={selectedCatModelImg} className="detail-img-class" 	/>
				<p>{selectedCatModelDesc}</p>
			</div>
		);
	}

	render() {
		return (
			<div className="d-flex flex-column">
				<button onClick={() => this.showCategoryList()} className="align-self-heading">Take me back!</button>
				{this.renderName()}
				<ul className="detail-ul-class d-flex ul-class-scrollbar">
					{this.renderList()}
				</ul>
			</div>
		);
	}
}