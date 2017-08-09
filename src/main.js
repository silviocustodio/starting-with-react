




var Page = React.createClass({


    getInitialState: function () {

        return{data: [

            {id:"1", name:"Maria João", email: "maria@mail.com", subject:"R", message: "My message test!"},
            {id:"2", name:"Pedro Manuel Doria", email: "pedro@mail.com", subject:"A", message: "My message test 2!"},


        ]}

    },


    handleContactSubmit: function (contact) {

        console.log(contact);

        var newContacts = this.state.data.concat([contact]);
        this.setState({data: newContacts});





    },


    render : function () {

        return (

            <myElement>
                <Nav  logo="React"   linkUrl="index.html"/>
                <div className="container">
                    <Title>

                       <p>My component title !!! </p>


                    </Title>


                    <div className="row">
                        <Form  onContactSubmit={this.handleContactSubmit}  idNumber={this.state.data.length + 1}/>
                    </div>

                    <div className="row">

                        <List data={this.state.data}/>
                    </div>

                </div>

            </myElement>

        );

    }

});


ReactDOM.render(
    <Page  />,
    document.getElementById('page')

);