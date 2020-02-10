import React, {Component} from 'react';
import store, { UPDATE_FAVSHOW } from '../store';

export default class Profile extends Component {
    constructor(){
        super();

        this.state = {
            userName: store.getState().username,
            favShow: ''
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                favShow: store.getState().favShow
            })
        });
    }

    handleShowChange (e){
        let action = {
            type: UPDATE_FAVSHOW,
            payload: e.target.value
        }

        store.dispatch(action)
    }

    render() {
        return(
            <div>
                <h1>Welcome, {this.state.userName}</h1>
                <input 
                onChange={this.handleShowChange}
                placeholder="Favorite Show" />
                <input placeholder="Favorite Movie" />
                <input placeholder="Favorite Color" />
                <input placeholder="Favorite Food" />
                <input placeholder="Favorite Band" />
                <h2>Favorite show is: {this.state.favShow}</h2>
            </div>
        )
    }
}