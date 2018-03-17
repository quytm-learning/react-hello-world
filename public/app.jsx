var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React'
        }
    },
    onButtonClick: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        alert(name);
    },
    render: function () {

        var name = this.props.name;
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