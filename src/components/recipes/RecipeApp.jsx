import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ListRecipesComponent from './ListRecipesComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import RecipeComponent from './RecipeComponent.jsx'



class RecipeApp extends Component {
    render() {
        return (
            <div className="RecipeApp">

                {/* allows you to type in browser to route to specific pages */}
                <Router>
                    <>
                        <HeaderComponent/>
                        {/* switch makes sure only one route is active at a time */}
                        {/* AuthenticatedRoute prevents unathenticated users from trying 
                            to access restricted pages via typing in the browser 
                            RecipeComponent must have higher priority than ListRecipesComponent
                        Place it higher*/}
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/recipes/:id" component={RecipeComponent}/>
                            <AuthenticatedRoute path="/recipes" component={ListRecipesComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
            
        )
    }
}

export default RecipeApp


