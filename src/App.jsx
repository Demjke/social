import { Route, Routes } from "react-router-dom";
import "./App.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Prefolader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import { initializeApp } from "./store/app-reducer";

const Home = React.lazy(() => import("./components/Main/Home/Home"));
const MessagesContainer = React.lazy(() => import("./components/Main/Messages/MessagesContainer"));
const Login = React.lazy(() => import("./components/Main/Login/Login"));
const Music = React.lazy(() => import("./components/Main/Music/Music"));
const News = React.lazy(() => import("./components/Main/News/News"));
const ProfileContainer = React.lazy(() => import("./components/Main/Profile/ProfileContainer"));
const Settings = React.lazy(() => import("./components/Main/Settings/Settings"));
const UsersContainer = React.lazy(() => import("./components/Main/Users/UsersContainer"));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Prefolader />;
        }

        return (
            <div className="app-wrapper">
                <div className="app-wrapper__container">
                    <HeaderContainer />
                    <Nav />
                    <div className="main">
                        <React.Suspense fallback={<Prefolader />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="profile/:userId?" element={<ProfileContainer />} />
                                <Route path="messages/*" element={<MessagesContainer />} />
                                <Route path="users" element={<UsersContainer />} />
                                <Route path="news" element={<News />} />
                                <Route path="music" element={<Music />} />
                                <Route path="login" element={<Login />} />
                                <Route path="settings" element={<Settings />} />
                            </Routes>
                        </React.Suspense>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp })(App));
