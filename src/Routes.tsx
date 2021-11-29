import React from 'react'
import { Route, Switch } from 'react-router-dom'

const HomePage = React.lazy(() => import('@pages/HomePage'))
const SharePatientPage = React.lazy(() => import('@pages/SharePatientPage'))

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <HomePage />
                </React.Suspense>
            </Route>
            <Route path="/patient/:id">
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <SharePatientPage />
                </React.Suspense>
            </Route>
        </Switch>
    )
}

export default Routes
