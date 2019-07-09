import React from "react";
import "./Position.scss";
import ReactMarkdown from "react-markdown";

let positionText = `
Eko is a media and technology company pioneering a new medium in which stories told in live action video are shaped by viewers as they unfold. We provide the leading technology platform for the creation and delivery of serial interactive video entertainment and partner with media companies, independent creators and top brands to create experiences for highly engaged, digitally native audiences. Our award-winning shows are distributed through HelloEko.com, affiliate partners, and social networks; and are viewable on desktop, mobile, connected TV’s, and VR.  Eko Studios, which includes our free authoring tools, is also home to a growing community of creators crafting their own interactive experiences with Eko’s platform. The company is based in Tel Aviv with offices in New York. 

We use JavaScript for (almost) everything. This means server side, cli tools, webapps and other clients such as mobile, Xbox, Steam and smart TVs apps.

We're looking for a developer who not only loves JavaScript but also has the passion, knowledge and ability to use it in ways that push the envelope of what can be done on the web. 


At Eko, you’ll be working on a platform that enables the creation and delivery of experiences that are somewhere between TV shows and video games. You’ll be serving millions of viewers. You’ll be taking JavaScript to the extreme. This means getting to the bits and bytes of rendering, I/O handling and data processing. You’ll be using cutting edge and experimental features. You’ll be facing the darkest corners of modern browsers and nodejs. You’ll be amazed by what can be done in JavaScript these days. It’s going to be fun!

Yes, we use all the tools and libraries cool kids like (React, Redux, Angular, HapiJS to name a few...), but this shouldn’t be your reason for joining us. If you are all about creating mind-blowing experiences on the web, consider yourself invited!

Check out our [website](https://helloeko.com) and the [developers site](https://developer.helloeko.com) to get a better sense of what it’s all about. 
`;



function Position(props){
    return (
        <section className="position">
            <div className="content">
                <ReactMarkdown source={positionText} />
                {props.children}
            </div>
        </section>
    )
}

export default Position;