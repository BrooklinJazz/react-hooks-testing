import React, { useState, Fragment } from "react"
import Button from "@material-ui/core/Button";
import Gist from "react-gist";
import { ReactHookCounterId } from "common/constants"

export default function Counter(params) {
    const [count, setCount] = useState(0);

    return (
        <Fragment>
            <div>
                <p>You clicked {count} times</p>
                <Button onClick={() => setCount(count + 1)} variant="contained">
                    Click Me
                </Button>
            </div>
            <Gist id={ReactHookCounterId} />
        </Fragment>
    )
}