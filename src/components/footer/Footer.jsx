import React from "react";
import "./Footer.scss";

function Footer(props){
    props = {
        columns: [ 
            [ // TODO: add anchor links
                {
                    title: 'About',
                    URL: ''
                },
                {
                    title: 'Tech',
                    URL: ''
                },
                {
                    title: 'Careers',
                    URL: ''
                },
                {
                    title: 'Ecosystem',
                    URL: ''
                },
                {
                    title: 'Contact',
                    URL: ''
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
            [ // TODO: add links
                {
                    title: 'Privacy Policy',
                    URL: ''
                },
                {
                    title: 'Terms',
                    URL: ''
                },
                {
                    title: 'Legal',
                    URL: ''
                },
            ]
        ]
    }
    
    let footerItems = props.columns.map((column, i) => (
        <ul className="column" key={i}>
            {column.map(item => (
                <li className="item" key={item.title}>
                    <a className="title" href={item.URL} target="_blank">{item.title}</a>
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