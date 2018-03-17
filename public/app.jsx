var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React'
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name
        }
    },
    onButtonClick: function (e) {
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;
        this.refs.name.value = '';// reset value

        if (typeof  name === 'string' && name.length > 0) {
            this.state.name = name;
            this.setState({
                name: name
            });
        }
        // alert(name);
    },
    render: function () {

        var name = this.state.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>This is a component</p>
                <p>{'this is ' + message}</p>

                <form action="" onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set name</button>
                </form>

            </div>
        );
    }
});

var globalName = 'Tran Minh Quy';

ReactDOM.render(
    <Greeter name={globalName} message="Message from props"/>,
    document.getElementById('app')
);