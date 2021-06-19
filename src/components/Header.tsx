import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled, ChangeableSpan } from '../styled/shared';

const Header: React.FC = () => {
    return (
        <Link to="/">
            <HeaderStyled>
                <ChangeableSpan lightToDark>TV</ChangeableSpan>
                <ChangeableSpan lightToDark={false}>BLAND</ChangeableSpan>
                <span style={{ fontSize: 14, fontWeight: 400 }}>
                    Grab your snacks! Turn your volume up! And enjoy!
                </span>
            </HeaderStyled>
        </Link>
    );
};

export default Header;
