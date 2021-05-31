import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (<>
        <footer>
            <div className="d-flex justify-content-between align-items-center">
                <small className="small text-light">&copy;{year} All Copyrights Reserved | Design By Aditya Jain</small>
                <small className="small text-light">Source: As per Govt. official site.</small>
            </div>
        </footer>
    </>);
}

export default Footer;