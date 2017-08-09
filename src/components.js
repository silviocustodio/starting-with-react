var Nav =  React.createClass({

    render: function () {

        return (

            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href={this.props.linkUrl}>

                            {this.props.logo}
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});


var Title = React.createClass({

    render: function () {


        var TitleStyle = {

            color: "#777676",
            fontSize:"40px"


        };

        return(


            <div className="row">

                <h1 style={TitleStyle}>  </h1>
            </div>
        );

    }



});

var Button = React.createClass({


    getInitialState: function () {

        return {

            click: false

        };

    },


    toggleClick : function () {


        this.setState({

            click: !this.state.click

        });

    },

    render : function () {


        var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
        var title = this.state.click ? this.props.textActive : this.props.children;

        return (

            <button onClick={this.toggleClick} className={btnClass}> { title }</button>
        );

    }

});


var Form = React.createClass({

    getInitialState: function () {

        return{name: '',email:'',subject: 'J',message: '' }

    },

    handleNameChange: function (e) {

        this.setState({name: e.target.value});
        console.log(this.state.name)
    },

    handleEmailChange: function(e){
        this.setState({email: e.target.value });

    },

    handleSubjectChange: function (e) {

        this.setState({subject: e.target.value});

    },

    handleMessageChange: function (e) {

        this.setState({message: e.target.value});

    },

    handleSubmit: function (e) {

        e.preventDefault();

        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var subject = this.state.subject;
        var message = this.state.message.trim();

        if (!name || !email || !subject || !message){


            return;

        }

        this.props.onContactSubmit({id: this.props.idNumber, name:name, email: email, subject:subject, message:message});


    },


    render: function () {

        var inputStyle = {

            color: "#A7A5A5",
            fontSize:"20px",
            padding:"20px",

        };

        return(
            <form onSubmit={this.handleSubmit} >

                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" className="form-control" onChange= {this.handleNameChange} style={inputStyle} placeholder="Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" onChange={this.handleEmailChange} style={inputStyle} placeholder="Ex: name@mail.com"/>
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select  defaultValue={this.state.subject} className="form-control"  onChange={this.handleSubjectChange}>
                        <option value="A">Angular</option>
                        <option value="J">JQuery</option>
                        <option value="R">React</option>


                    </select>



                </div><div className="form-group">
                    <label htmlFor="Message">Nome</label>
                    <textarea  className="form-control" onChange={this.handleMessageChange} style={inputStyle} rows={6} />
                </div>
                <Button textActive="Loading...">Send</Button>
            </form>
        );
    }

});


var Contact = React.createClass({

    render: function () {

        return(

            <tr>
                <th scope="row">{this.props.idNumber}</th>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.subject}</td>
                <td>{this.props.children}</td>
            </tr>
        );
    }

});

var List = React.createClass({

    render: function () {


        var contactNodes = this.props.data.map(function (contact) {

            return(<Contact idNumber={contact.id} name={contact.name} email={contact.email} subject={contact.subject} >

                    {contact.message}
            </Contact>
            );
        });

            return (

                <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>

                    </tr>
                </thead>
                <tbody>

                    {contactNodes}

                </tbody>

            </table>
        );
    }
});