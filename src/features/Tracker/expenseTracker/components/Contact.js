import React from 'react'

export default function Contact() {
    return (
        <div className="contacts">
            <img src={require("../images/fb.png")} onClick={() => { window.open("https://www.facebook.com/asadali.asad.355") }} alt="fb" />
            <img src={require("../images/github.png")} onClick={() => { window.open("https://github.com/asadalibest1") }} alt="github" />
            <img src={require("../images/linkedin.png")} onClick={() => { window.open("https://www.linkedin.com/in/asad-ali-14bab11b2/") }} alt="linkedin" />
        </div>
    )
}
