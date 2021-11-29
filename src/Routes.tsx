import React from 'react'
import { Route, Switch } from 'react-router-dom'

const HomePage = React.lazy(() => import('@pages/HomePage'))
const SharePatientPage = React.lazy(() => import('@pages/SharePatientPage'))

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <React.Suspense fallback={<div>Loading...</div>}>
                    <HomePage />
                </React.Suspense>
            </Route>
            <Route path="/about">
                <React.Suspense fallback={<div>Loading...</div>}>
                    <div>About section under construction... 🚧</div>
                </React.Suspense>
            </Route>
            <Route path="/patient/:id">
                <React.Suspense fallback={<div>Loading...</div>}>
                    <SharePatientPage />
                </React.Suspense>
            </Route>
            <Route path="/*">
                <div>Not found...</div>
            </Route>
        </Switch>
    )
}

export default Routes
