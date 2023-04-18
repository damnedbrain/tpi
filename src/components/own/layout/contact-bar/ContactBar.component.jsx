import styles from './ContactBar.module.scss';
import { Button, Dropdown, DropdownButton, DropdownButtonProps } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpFromBracket, faPhone } from '@fortawesome/free-solid-svg-icons';
import zaloIcon from '@assets/icons/zalo-seeklogo.com.svg'
import Link from 'next/link';

import React, { useState } from 'react';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className={styles['custom-toggle']}
  >
    {children}
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
/*
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);
*/
const ContactBar = () => {
    return(
        <>
        <div className={styles['container']}>
            <Dropdown drop="up">
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} style={{color: "#fff",}} size='3x' />
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles['dropdown-menu-add']}>

                    <Dropdown.Item className={styles['dropdown-item-add']} eventKey="1">
                        <Link
                            href='http://m.me/116671641370296' 
                        >
                            <FontAwesomeIcon icon={faFacebookMessenger} style={{color: "#fff",}} size='2x' />
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles['dropdown-item-add']} eventKey="1">
                        <Link
                            href='http://m.me/1305438312916916' 
                        >
                            <FontAwesomeIcon icon={faFacebookMessenger} style={{color: "#fff",}} size='2x' />
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles['dropdown-item-add']} eventKey="2">
                        <Link
                            href='tel:093 100 0001'
                        >
                            <FontAwesomeIcon icon={faPhone} style={{color: "#fff",}} size='2x' />
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles['dropdown-item-add']} eventKey="3">
                        <FontAwesomeIcon icon={faFacebook} style={{color: "#fff",}} size='2x' />
                    </Dropdown.Item>
                    <Dropdown.Item className={styles['dropdown-item-add']} eventKey="1">
                        <Link
                            href='http://zalo.me/0931000001' 
                        >
                            <FontAwesomeIcon icon={zaloIcon} style={{color: "#fff",}} size='2x' />
                        </Link>
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
        </div>

        </>
    )
};
export default ContactBar;