import { Link } from "react-router-dom"

import Radio from "./Radio"

import { Button, Form } from "react-bootstrap";

import { useTransition, useSpring, animated } from "react-spring";


export default function PeteForm({ handlePeteForm, setPopForm }) {
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
        <div className="">
            {transition2((style, item) =>
                <animated.div style={style} className="roleframe">
                    <p>
                        Now time to decide, analyze the status of your house and the city</p>
                    <Form onSubmit={setPopForm}>
                        <Form.Group>
                            <div className="gameQuestion">
                                <Form.Label htmlFor={`radio`}>You check flood risk indivation. What is your decision?</Form.Label>
                                <Radio label='Stay' name="questionPete2" />
                                <Radio label='Evacuate' name="questionPete2" />
                                <div className="buttons" style={{ margin: "15px 80px" }}><Button size="lg">Submit</Button></div>
                            </div>
                        </Form.Group>
                    </Form>
                </animated.div>
            )}
        </div>
    )
}

