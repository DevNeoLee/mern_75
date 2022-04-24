import { Link } from "react-router-dom"

import { useState } from 'react'

import Radio from "./Radio"

import { Button, Form } from "react-bootstrap";

import { useTransition, useSpring, animated } from "react-spring";


export default function NormanForm({ handleNormanForm, setPopForm}) {

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

    const handleStay = () => {

    }

    return (
        <div className="">
            {transition2((style, item) =>
                <animated.div style={style} className="roleframe">
                    <p>
                        Now time to decide, analyze the status of your house and the city</p>
                    <Form onSubmit={setPopForm} onChange={ handleStay }>
                        <Form.Group>
                            <div className="gameQuestion">
                                <Form.Label htmlFor={`radio`}>You check flood risk indivation. What is your decision?</Form.Label>
                                <Radio label='Stay' name="questionNorman2" />
                                <Radio label='Evacuate' name="questionNorman2" />
                                {
                                    !stay && (
                                        <Form.Group>
                                            <div className="gameQuestion2">
                                                <Form.Label htmlFor={`radio`}>Which way is your decision?</Form.Label>
                                                    <Radio label='Route A' name="questionNorman3" />
                                                    <Radio label='Route B' name="questionNorman3" />
                                                    <Radio label='Route C' name="questionNorman3" /> 
                                            </div>
                                        </Form.Group>
                                    )
                                }
                            <div className="buttons" style={{ margin: "15px 80px" }}><Button size="lg">Submit</Button></div>
                            </div>
                        </Form.Group>
                    </Form>
                </animated.div>
            )}
        </div>
    )
}

                