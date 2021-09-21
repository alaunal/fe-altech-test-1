import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import tw, { styled, css } from 'twin.macro';

// -- Components

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Primary>
        <HeaderContainer>
          <PrimaryRow>
            <PrimaryBrand><Link to="/">DEMO <span>Streaming</span></Link></PrimaryBrand>
            <div tw="hidden md:flex items-center">
              <Link to="/" tw="inline-block mr-10 text-gray-100 hover:text-white font-normal text-lg">Login</Link>
              <Link to="/" tw="inline-flex px-5 py-2 text-gray-100 bg-gray-800 hover:bg-gray-700 font-normal text-lg items-center rounded-lg">Start Your Free Trial</Link>
            </div>
          </PrimaryRow>
        </HeaderContainer>
      </Primary>
      <Secondary>
        <HeaderContainer>
          <SecondaryTitle>{props.titleNav}</SecondaryTitle>
        </HeaderContainer>
      </Secondary>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  titleNav: PropTypes.string,
};

Header.defaultProps = {
  titleNav: 'Navigation Title',
};

// -- Styled Area --

const HeaderWrapper = styled.div(() => [
  tw`fixed top-0 left-0 w-full z-10`,
]);

const HeaderContainer = styled.div(() => [tw`container mx-auto px-4 xl:px-0`]);

const Primary = styled.div(() => [
  tw`h-14 md:h-20 bg-gradient-to-r from-blue-600 to-purple-500 flex items-center`,
]);

const Secondary = styled.div(() => [
  tw`h-10 md:h-12 bg-gray-700 flex items-center`,
]);

const PrimaryRow = styled.div(() => [tw`flex justify-between`]);

const PrimaryBrand = styled.div(() => [
  tw`text-gray-50 text-xl md:text-3xl font-semibold`,
  css`
    > span {
      ${tw`font-normal`}
    }
  `
]);

const SecondaryTitle = styled.div(() => [
  tw`text-gray-100 text-base md:text-xl font-normal`,
]);

export default Header;
