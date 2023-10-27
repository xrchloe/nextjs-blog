import React from "react";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <Button type="link" asLink href={"/"}>
          <img src="/images/logo.svg" alt="logo" className={"logo"} />
        </Button>
        <Button type="link" asLink href={"/"} iconRight="ArrowDown">
          Features
        </Button>
        <Button type="link" asLink href={"/"} iconRight="ArrowDown">
          Integrations
        </Button>
        <Button type="link" asLink href={"/"} iconRight="ArrowDown">
          Examples
        </Button>
        <Button type="link" asLink href={"/"} iconRight="ArrowDown">
          Pricing
        </Button>
      </div>
      <div className="navbarRight">
        <Button type="link" asLink href={"/"}>
          Sign In
        </Button>
        <Button type="primary">Get Started</Button>
        <Button type="link" asLink href={"/"} iconRight="ArrowDown">
          <img src="/images/lang.svg" alt="lang" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
