import * as React from 'react';

interface Props {
  email?: string | null;
  loggedIn?: boolean;
}

const Header = (props: Props) => (
  <div id="header" />
);

export default Header;
