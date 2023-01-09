import { Col, Container, Row } from "react-bootstrap"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useState,useEffect } from "react"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const torootate = ["Developer Web", "Designer", "Developer Mobile"]
    const [text, setText] = useState('')
    const period = 2000
    const [delta, setDelta] = useState(30 - Math.random() * 100)
    useEffect(() => {
        const timer = setTimeout(() => {
            tick()
        }, delta)
        return () => clearTimeout(timer)
    }, [text, delta, loopNum, isDeleting])

    const tick = () => {
        let i = loopNum % torootate.length
        let fullText = torootate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
            console.log("ret");
        } 

        if (!isDeleting && text === fullText) {
                setIsDeleting(true)
                setDelta(period)
        } else if (isDeleting && text === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500) 
            console.log(text);
        }
    
    }
    return (
        <section className="banner" id="home">
            <Container className="banner-content">
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="banner-text">Hello, I'm Jules Gaborit</span>
                        <h1>{`I'm emdecoded `}<span className="wrap">{text}</span></h1>
                        <button onClick={()=> console.log("lets by connect") } className="btn btn-primary">Let's connect</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="banner-img">
                            <img src="https://imgs.search.brave.com/gkkuO-brJJf_QxhrVx-GoIktvhicatzK22VE3akwD-k/rs:fit:720:340:1/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2UvZ2l0aHVi/LWxvZ28tdmVjdG9y/LTEzLnBuZw" alt="banner" />
                        </div>
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}