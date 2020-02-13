import React from "react";
import "./Footer.scss";

function Footer(props){
    props = {
        columns: [ 
            [
                {
                    title: 'About',
                    URL: '/#about'
                },
                {
                    title: 'Tech',
                    URL: '/#tech'
                },
                {
                    title: 'Careers',
                    URL: '/#careers'
                },
                {
                    title: 'Ecosystem',
                    URL: '/#ecosystem'
                },
                {
                    title: 'Contact',
                    URL: '/#contact'
                }
            ],
            [
                {
                    title: 'eko',
                    URL: 'https://eko.com/'
                }, 
                {
                    title: 'About eko',
                    URL: 'https://company.eko.com/history'
                }, 
                {
                    title: 'eko for Developers',
                    URL: 'https://developer.eko.com/'
                }, 
                {
                    title: 'eko for Brands',
                    URL: 'https://company.eko.com/brands'
                }, 
                {
                    title: 'eko for Creators',
                    URL: 'https://studio.eko.com/'
                }, 
                {
                    title: 'GitHub',
                    URL: 'https://github.com/ekolabs',
                    icon: 'fab fa-github'
                }
            ],
            [

                {
                    title: 'Follow us on Twitter',
                    URL: 'https://twitter.com/ekoengi',
                    icon: 'fab fa-twitter'
                },
                {
                    title: 'Connect with us on LinkedIn',
                    URL: 'https://www.linkedin.com/company/ekovideo',
                    icon: 'fab fa-linkedin-in'
                },
                {
                    title: 'Hear us on Medium',
                    URL: 'https://medium.com/ekoengineering',
                    icon: 'fab fa-medium-m'
                }
            ],
            [
                {
                    title: 'Privacy Policy',
                    URL: 'https://company.eko.com/legal/privacy'
                },
                {
                    title: 'Terms',
                    URL: 'https://company.eko.com/legal/website-terms-of-use'
                },
                {
                    title: 'Legal',
                    URL: 'https://company.eko.com/legal/legal-terms'
                },
            ]
        ]
    }
    
    let footerItems = props.columns.map((column, i) => (
        <ul className="column" key={i}>
            {column.map(item => (
                <li className="item" key={item.title}>
                    <a className="title" href={item.URL} target={(!i) ? "" : "_blank"}>
                        {item.icon ? <i class={[item.icon, 'title-icon'].join(' ')}></i> : null}{item.title}
                    </a>
                </li>
            ))}
        </ul>
    ));

    return (
        <section className="footer">
            <div className="content">
                {footerItems}
            </div>
        </section>
    );
}

export default Footer;