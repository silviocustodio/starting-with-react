

var Page = React.createClass({
    displayName: "Page",


    getInitialState: function () {

        return { data: [{ id: "1", name: "Maria João", email: "maria@mail.com", subject: "R", message: "My message test!" }, { id: "2", name: "Pedro Manuel Doria", email: "pedro@mail.com", subject: "A", message: "My message test 2!" }] };
    },

    handleContactSubmit: function (contact) {

        console.log(contact);

        var newContacts = this.state.data.concat([contact]);
        this.setState({ data: newContacts });
    },

    render: function () {

        return React.createElement(
            "myElement",
            null,
            React.createElement(Nav, { logo: "React", linkUrl: "index.html" }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    Title,
                    null,
                    React.createElement(
                        "p",
                        null,
                        "My component title !!! "
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(Form, { onContactSubmit: this.handleContactSubmit, idNumber: this.state.data.length + 1 })
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(List, { data: this.state.data })
                )
            )
        );
    }

});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));