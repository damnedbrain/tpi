import styles from './ContactBar.module.scss';
import { Button, Dropdown, DropdownButton, DropdownButtonProps } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpFromBracket, faPhone } from '@fortawesome/free-solid-svg-icons';


const ContactBar = () => {

    return(

        <>
        <div className={styles['container']}>
            <Dropdown drop="up">
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
                <FontAwesomeIcon icon={faArrowUpFromBracket} style={{color: "#fff",}} size='5x' />
            </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                    <FontAwesomeIcon icon={faFacebookMessenger} style={{color: "#06703a",}} size='xl' />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                    <FontAwesomeIcon icon={faPhone} style={{color: "#06703a",}} size='xl' />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                    <FontAwesomeIcon icon={faFacebook} style={{color: "#06703a",}} size='xl' />
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>

        </>
    )
};

export default ContactBar;