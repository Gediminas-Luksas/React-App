import React from 'react';

class GoogleAuth extends React.Component{
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1045213136026-afggrpc6srnhcu7lscjc3lffv3c25m6m.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChanges);
            });
        });
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    onAuthChanges = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };


    renderAuthButton() {
        if (this.state.isSignedIn === null){
            return null;
        } else if ( this.state.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    };

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}


export default GoogleAuth;