import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BlogDetails from './BlogDetails'
import Blogs from './Blogs'
import Dashboard from './Dashboard'
import EditBlog from './EditBlog'
import Home from './Home'
import Login from './Login'
import NotFound from 'components/NotFound'
import PublishBlog from './PublishBlog'
import React from 'react'
import SignUp from './SignUp'

Home.load()
Blogs.load()
Login.load()
SignUp.load()
EditBlog.load()
Dashboard.load()
BlogDetails.load()
PublishBlog.load()

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:id" component={BlogDetails} />
        <Route exact path="/dashboard/edit/:id" component={EditBlog} />
        <Route exact path="/dashboard/publish/:id" component={PublishBlog} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router