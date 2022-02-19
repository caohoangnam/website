import React from 'react'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/newLogo.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

function Header({hidden }) {
    return (
        <HeaderContainer className="header">
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }

        </HeaderContainer>
    )
}

const mapStatetoProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStatetoProps)(Header)
