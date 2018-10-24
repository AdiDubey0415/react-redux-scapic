import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { models } from './Models/index.js';

// Component imports
import CategoryDetail from './Components/category-detail';
import CategoryList from './Components/category-list';

// Connect to Redux
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {  fetchDataFirstTime, 
          setPaginationPage,
          setCategoryDetailPage,
          setSingleModelDetail
       } from './ActionCreators/index.js';


class App extends Component {

  componentWillMount = () => {
    this.props.fetchDataFirstTime();
  }

  showState = () => {
    console.log(this.props.appstate);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <div
              className="App-link"
              rel="noopener noreferrer"
            >
            <Switch>
              <Route exact path="/" 
                      render={(props) => 
                        <CategoryList {...props} appstate={this.props.appstate}
                        setCategoryDetailPage={(index) => this.props.setCategoryDetailPage(index)}
                        setPaginationPage={(start, end) => this.props.setPaginationPage(start, end)} />} 
                      />
              <Route  path="/category-list" 
                      render={(props) => 
                        <CategoryList {...props} appstate={this.props.appstate}
                        setCategoryDetailPage={(index) => this.props.setCategoryDetailPage(index)}
                        setPaginationPage={(start, end) => this.props.setPaginationPage(start, end)}/>} 
                      />
              <Route exact path="/category-detail" 
                      render={(props) => 
                        <CategoryDetail {...props} appstate={this.props.appstate} 
                        setSingleModelDetail={(value) => this.props.setSingleModelDetail(value)}/>} 
                      />
            </Switch>

            </div>
          </header>
        </BrowserRouter>
      </div>
    );
  }
}

// <button onClick={() => this.showState()}>Show State</button>

const mapStateToProps = (state) => {
  return {
    appstate: state.AppState
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchDataFirstTime, setPaginationPage, setCategoryDetailPage, setSingleModelDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
