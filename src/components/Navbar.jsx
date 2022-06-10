import React from 'react';
import {CgMenuBoxed} from 'react-icons/cg';
import '../stylesheets/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {useState} from 'react';

function Navbar(){

    const [dropdown, setDropdown] = useState(false);

    const openCloseDropdown = () => {
        setDropdown(!dropdown);
    }

    return(
        <div className='navbar-container'>
            <Dropdown isOpen = {dropdown} toggle = {openCloseDropdown} >
                <DropdownToggle >
                    <CgMenuBoxed />
                </DropdownToggle >

                <DropdownMenu>
                    <DropdownItem>hola</DropdownItem>
                    <DropdownItem>buenas</DropdownItem>
                    <DropdownItem>wapo</DropdownItem>
                </DropdownMenu>

            </Dropdown>
            <p>login</p>
            <img className="image" src={require('../img/picprofile.png')} alt="artist" />
        </div>
    );
}

export default Navbar;


{/* <CgMenuBoxed className='navbar-icon' ></CgMenuBoxed> */}
