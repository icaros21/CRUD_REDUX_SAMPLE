import React from 'react';
import 'bulma/css/bulma.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <section className="hero is-primary">
            <div className="hero-body">
                <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                        <div className="field has-addons">
                            <p className="control">
                                <Link to={'/'} className="is-link">CRUD REACT REDUX</Link>
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="level-right">
                        <p className="level-item">
                            <Link to={'/NuevoProducto'} className="button is-secondary">Agregar producto</Link>
                        </p>
                    </div>
                </nav>
            </div>
        </section>
     );
}
 
export default Header;