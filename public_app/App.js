const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
import {Link}           from 'react-router-dom';
import Nav              from './components/Nav';
import AllMovies        from './pages/AllMovies';
import Home             from './pages/Home';
import MoviesDetails    from './pages/MoviesDetails';
import Register         from './pages/Register';
import Login            from './pages/Login';
import LogOut           from './components/LogOut';

class App extends React.Component{
    render () {
        return (
            <Router>
                <div className="page">
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/movies-details/:id' component={MoviesDetails} />
                            <Route exact path='/all-movies' component={AllMovies} />
                            <Route exact path='/login/register' component={Register} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/login/logout' />
                            <Route render={function (){
                                    return <p>Not Found</p>
                                }} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
ReactDOM.render(
    <App />, document.getElementById('app')
);
