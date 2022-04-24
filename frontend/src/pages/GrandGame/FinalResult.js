import { Link } from "react-router-dom"

import { HeartFill } from 'react-bootstrap-icons';
import { Form, Button, ProgressBar, Table } from "react-bootstrap";

import { useTransition, useSpring, animated } from "react-spring";


export default function Erica3({ round, ericaHealth, ericaMessageForNorman, ericaMessageForPete }) {
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
        <>
        <div className="finalH2">
            {transition((style, item) =>
                <animated.h2 style={style}>Final Result</animated.h2>
            )}
        </div>
        <div className="resultWrapper">
            <div className="resultContainer">
                {transition2((style, item) =>
                    <animated.div style={style} className="finalResult">
                        <h3>Player Summary</h3>
                        <Table striped bordered hover size="lg" responsive>
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>Decision</th>
                                    {/* <th># of Players</th> */}
                                    <th>Score Round1</th>
                                    <th>Score Round2</th>
                                    <th>Score Round3</th>
                                    <th>Score Round4</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Erica</td>
                                    <td>risk scale</td>
                                    {/* <td>1</td> */}
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>Pete</td>
                                    <td>Keep Power</td>
                                    {/* <td>1</td> */}
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>Norman A</td>
                                    <td>Keep Power</td>
                                    {/* <td>1</td> */}
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>Norman B</td>
                                    <td>Keep Power</td>
                                    {/* <td>1</td> */}
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>Norman C</td>
                                    <td>Keep Power</td>
                                    {/* <td>1</td> */}
                                    <td>80</td>
                                </tr>
                            </tbody>
                        </Table>
                    </animated.div>
                )}
            </div>
        </div>
        </>
    )
}
