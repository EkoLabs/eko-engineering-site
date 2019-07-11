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
                    title: 'Eko',
                    URL: 'https://company.helloeko.com/'
                }, 
                {
                    title: 'Hello Eko',
                    URL: 'https://helloeko.com/'
                }, 
                {
                    title: 'Eko for Developers',
                    URL: 'https://developer.helloeko.com/'
                }, 
                {
                    title: 'Eko for Brands',
                    URL: 'https://company.helloeko.com/brands'
                }, 
                {
                    title: 'Eko for Creators',
                    URL: 'https://studio.helloeko.com/'
                }, 
                {
                    title: 'GitHub',
                    URL: 'https://github.com/EkoLabs'
                }
            ],
            [
                {
                    title: 'Facebook',
                    URL: 'https://www.facebook.com/helloeko'
                },
                {
                    title: 'Twitter',
                    URL: 'https://twitter.com/ekoengi'
                },
                {
                    title: 'LinkedIn',
                    URL: 'https://www.linkedin.com/company/ekovideo'
                },
            ],
            [
                {
                    title: 'Privacy Policy',
                    URL: 'https://company.helloeko.com/legal/privacy'
                },
                {
                    title: 'Terms',
                    URL: 'https://company.helloeko.com/legal/website-terms-of-use'
                },
                {
                    title: 'Legal',
                    URL: 'https://company.helloeko.com/legal/legal-terms'
                },
            ]
        ]
    }
    
    let footerItems = props.columns.map((column, i) => (
        <ul className="column" key={i}>
            {column.map(item => (
                <li className="item" key={item.title}>
                    <a className="title" href={item.URL} target={(!i) ? "" : "_blank"}>{item.title}</a>
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