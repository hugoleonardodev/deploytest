import React from 'react'
import { useSelector } from 'react-redux'
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap'

import Avatar from '@components/atoms/Avatar'
import { IRootStateWithReducers } from '@store/constants/_rootReducerTypes'

import { HeaderNavCollapse } from './Header.styles'

const Header: React.FC = () => {
    const [shouldToggle, setShouldToggle] = React.useState(false)

    const handleToggle = React.useCallback(() => {
        setShouldToggle(!shouldToggle)
    }, [shouldToggle])

    const { user, avatar } = useSelector((state: IRootStateWithReducers) => state.configs)

    return (
        <Navbar color="light" expand="md" fixed="top" light>
            <NavbarBrand href="/">Pharma Inc.</NavbarBrand>
            <NavbarToggler onClick={handleToggle} />
            <HeaderNavCollapse isOpen={shouldToggle} navbar>
                <Nav className="me-auto" navbar>
                    <UncontrolledDropdown inNavbar nav>
                        <DropdownToggle caret nav>
                            <Avatar avatarUrl={avatar} avatarSize="thumbnail" />
                            {user}
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>About</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </HeaderNavCollapse>
        </Navbar>
    )
}

export default Header
