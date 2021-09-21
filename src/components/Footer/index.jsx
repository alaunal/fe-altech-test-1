import React from 'react';
import { Link } from 'react-router-dom';
import tw, { styled, css } from 'twin.macro';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// -- Components

const Footer = (props) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div tw="flex flex-col xl:justify-between xl:flex-row">
          <div>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/">Term & Condition</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Collection Statement</Link>
              <Link to="/">Help</Link>
              <Link to="/">Manage Account</Link>
            </Navigation>
            <p tw="text-xs md:text-sm text-white text-center xl:text-left">
              Copyright &copy; 2021 DEMO Screaming all right reserved.
            </p>
          </div>
          <div tw="text-center mt-8 xl:text-right xl:mt-0">
              <div tw="inline-block text-white hover:text-blue-700 ml-4 text-lg md:text-xl">
                <FaFacebookF />
              </div>
              <div tw="inline-block text-white hover:text-blue-400 ml-4 text-lg md:text-xl">
                <FaTwitter />
              </div>
              <div tw="inline-block text-white hover:text-red-500 ml-4 text-lg md:text-xl">
                <FaInstagram />
              </div>
          </div>
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
};

// -- Styled Area --

const FooterWrapper = styled.div(() => [
  tw`block py-12 w-full bg-gray-800 text-white`,
]);

const FooterContainer = styled.div(() => [tw`container mx-auto px-4 md:px-0`]);

const Navigation = styled.div(() => [
  tw`flex mb-4 justify-center xl:justify-start flex-wrap`,
  css`
    > a {
      text-decoration: none;
      ${tw`inline-block text-xs md:text-sm pr-4 mr-4 mb-3 md:mb-0 md:border-r border-gray-100 text-gray-200`}
    }

    > a:hover {
      text-decoration: none;
      ${tw`text-white`}
    }

    > a:last-child {
      ${tw`border-r-0`}
    }
  `
]);

export default Footer;
