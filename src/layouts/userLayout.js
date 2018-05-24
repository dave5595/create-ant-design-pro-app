import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import logo from '../assets/images/logo.svg'
import { getRoutes } from '../utils/utils'
import { Button } from 'antd'
import styles from './userLayout.less'

class UserLayout extends Component {
  //获取页面标题
  getPageTitle = () => {
    let {routerData, location} = this.props
    let {pathname} = location
    let title = '小王管理系统'
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - ${title}`
    }
    return title
  }

  render () {
    let {match, routerData} = this.props
    let routes = getRoutes(match.path, routerData)
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div id="user-layout">
          <div className={styles.logo}>
            222222
          </div>
          <Button type="primary">22222</Button>
          <Switch>
            {
              routes.map(item => {
                return <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              })
            }
            <Redirect exact from="/user" to="/user/login"/>
          </Switch>
        </div>
      </DocumentTitle>
    )
  }
}

export default UserLayout