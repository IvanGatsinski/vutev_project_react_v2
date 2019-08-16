import React from "react";
import { Link } from "react-router-dom"

export default function Error() {

    return <React.Fragment>
        <h2>Страницата неможе да бъде намерена <i className="fas fa-exclamation-triangle"></i></h2>
        <div>Натиснете <span><Link to="/">ТУК</Link></span> за да се върнете към главната страница.</div>
    </React.Fragment>
}