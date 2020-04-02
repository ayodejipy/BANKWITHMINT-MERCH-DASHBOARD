import React from 'react';
import bell from "../../assets/illustrations/bell.svg";
import user from "../../assets/illustrations/user.svg";

const navs = props => {
    return (
        <>
           <nav class={props.class}>
                <ul>
                    <li><a href="http://google.com">Pricing</a></li>
                    <li><a href="http://google.com">FAQ</a></li>
                    <li>
                        <a href="http://google.com">
                            <img src={bell} alt="Notification"/>
                            <span className="badge">8</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://google.com">
                            <span className="hello">Hello</span>
                            <span className="merch-name">Hello</span>
                            <img src={user} alt="User"/>
                        </a>
                    </li>
                </ul>       
            </nav> 
        </>
    )
}


export default navs;

