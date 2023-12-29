import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
    return (
        <section className="section footer bg-dark text-white"> {/* Fix the typo here */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6> Company information</h6> {/* Fix the typo here */}
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi id illo nisi, reprehenderit soluta ullam. Ab doloribus expedita nihil.
                        </p>
                    </div>
                    <div className="col-md-4 link">
                        <h6> Quick Links</h6>
                        <div className={'link-footer'}>
                            <div><Link to={'/'}>Home</Link></div>
                            <div><Link to={'/'}>Properties</Link></div>
                            <div><Link to={'/'}>Favorite</Link></div>
                            <div><Link to={'/'}>Blog</Link></div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <h6> Contact information</h6> {/* Fix the typo here */}
                        <div><p className="text-white mb-1">Galle, Sri Lanka</p></div> {/* Fix the typo here */}
                        <div><p className="text-white mb-1">+94 475808880</p></div>
                        <div><p className="text-white mb-1">mrm@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
