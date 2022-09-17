import React from "react";
import { Nav } from "react-bootstrap";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  return (
    <>
      <div>
        <Disclosure as="nav">
          <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:out">
            <GiHamburgerMenu
              className="block md:hidden h-6 w-6"
              aria-hidden="true"
            />
          </Disclosure.Button>
        </Disclosure>
      </div>
    </>
  );
}

export default NavBar;
