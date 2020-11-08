// Class Component
import React, { Component } from 'react'
// Only expressions, functions or classes are allowed as the `default` export.
// { any_name } -> Named Export
// Without braces is Default Export
import { ThemeContext } from './App'

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }

    render() {
        console.log("Render Counter")
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCounter(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={() => this.changeCounter(1)}>+</button>
                    </div>
                )
                }
            </ThemeContext.Consumer >
        )
    }

    changeCounter(amount) {
        // console.log(this.state.count);
        this.setState(
            // {
            //     count: this.state.count + amount
            // },
            prevstate => {
                return { count: prevstate.count + amount }
            }
        );

        // console.log(this.state.count);
        // this.setState(
        //     // {
        //     //     count: this.state.count + amount
        //     // },
        //     prevstate => {
        //         return { count: prevstate.count + amount }
        //     }
        // );

        // console.log(this.state.count);
    }
}