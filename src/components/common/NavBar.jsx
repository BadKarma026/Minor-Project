
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu borderless fixed="top">
            <Menu.Item>
                <img src='https://raw.githubusercontent.com/ankitgoyal0301/Homemade-RecipeBowl-Your-Ingredients-Our-Recipes/master/Documentation/Images/Cook.jpg' />
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/" /> 
           <Menu.Item name="Recipes" as={Link} to="/recipes" /> 
        </Menu>
    )
}

export default NavBar;