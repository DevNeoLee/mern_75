import { Link } from "react-router-dom"

import { useState } from 'react'

import Radio from "./Radio"

import { Button, Form, Spinner } from "react-bootstrap";

import { useTransition, useSpring, animated } from "react-spring";


export default function WaitModalPete({ handleWaitModal }) {

    const [stay, setStay] = useState(false);

    const transition = useTransition(true, {
        from: { x: 500, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
    });

    const transition2 = useTransition(true, {
        from: { x: 600, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        config: {
            duration: 500 // duration for the whole animation form start to end
        }
    });

    return (
        <div className="spinner_box">
            {transition2((style, item) =>
                <animated.div style={style} className="roleframe">
                    <p>
                        We would wait for Erica's Message First, meantime, please hover over the your house and road to see if the evacuation would be the right choice and if it is, which way would be best for you based on the information you researched.</p>

                    <div className="spinner">
                        <div className="spinnerPerson">
                            <img src="/erica.png" width="100px" />
                        </div>
                        <Spinner animation="grow" variant="info" size="sm" />
                        <Spinner animation="grow" variant="info" size="sm" />
                        <Spinner animation="grow" variant="info" size="sm" />
                        <div className="spinnerPerson">
                            <img src="/pete.png" width="100px" />
                        </div>
                    </div>
                    <div className="buttons" style={{ margin: "15px 80px" }}><Button size="lg" onClick={handleWaitModal}>Got it! Let's do it.</Button></div>
                </animated.div>
            )}
        </div>
    )
}

