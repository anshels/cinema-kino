var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Link = require ('react-router-dom').Link;
import Nav              from './components/Nav';
import AllMovies        from './pages/AllMovies';
import Home             from './pages/Home';
import MoviesDetails    from './pages/MoviesDetails';
import Register         from './pages/Register';
import Login         from './pages/Login';
import LogOut              from './components/LogOut';



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
