import Button from './Button.js';
import {useLocation} from 'react-router-dom';

function Header({ className, onAdd, showAdd }){
    const location = useLocation()
    return(
        <div className='header'>
            <h1>{className}</h1>
                {location.pathname === '/' && 
                    <Button 
                        className='btn' 
                        color={ showAdd 
                                ? 'red' 
                                : 'green'} 
                        text={showAdd 
                                ? 'Close' 
                                : 'Add'} 
                        onClick={onAdd}
                    />
                }
        </div>
    )
}

export default Header;
