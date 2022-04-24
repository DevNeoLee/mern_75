import { Link } from "react-router-dom"

import { useState } from 'react'

import Radio from "./Radio"

import { Button, Form, Spinner } from "react-bootstrap";

import { useTransition, useSpring, animated } from "react-spring";


export default function WaitModalErica({ handleWaitModal }) {

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
                        Now, Erica would wait for Pete and Norman's Choice Submit for now, please wait up to 15 ses.</p>

                        <div className="spinner">
                            <div className="">
                                <img src="/pete.png" width="100px" />
                            </div>
                            <div className="">
                                <img src="/norman.png" width="100px" />
                            </div>
                            <Spinner animation="grow" variant="info" size="sm" />
                            <Spinner animation="grow" variant="info" size="sm" />
                            <Spinner animation="grow" variant="info" size="sm" />
                          
                            <div className="">
                                <img src="/erica.png" width="100px" />
                            </div>
                        </div>
                        <div className="buttons" style={{ margin: "15px 80px" }}><Button size="lg" onClick={handleWaitModal}>Got it! Okay.</Button></div>

                </animated.div>
            )}
        </div>
    )
}

