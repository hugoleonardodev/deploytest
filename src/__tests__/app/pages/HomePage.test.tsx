// Test renderer with Router and Store (Redux) for easy customizing tests entries
import { RenderWithRouterAndStore } from '__tests__/helpers/RenderWithStoreAndRouter'
// import { render } from '../../helpers/TestRenderer'
// import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'

import HomePage from '@pages/HomePage'
import { screen } from '@testing-library/react'

describe('HomePageNoMDC.tsx', () => {
    it('should renders a link with `React` text', () => {
        const homeRoute = '/'
        const homeHistory = createMemoryHistory({ initialEntries: [homeRoute] })
        RenderWithRouterAndStore(<HomePage />, { path: homeRoute, history: homeHistory })
        // test case passes because we have commented out the mdc modules from HomePage
        const link = screen.getByText('React')
        expect(link).toBeInTheDocument()
    })
})
