import React from 'react'
import { Route, Switch } from 'react-router-dom'

const HomePage = React.lazy(() => import('@pages/HomePage'))

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <HomePage />
                </React.Suspense>
            </Route>
        </Switch>
    )
}

export default Routes
