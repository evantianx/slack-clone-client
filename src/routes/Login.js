import React from "react";
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import { Container, Header, Input, Button } from "semantic-ui-react";

export default observer(
  class Login extends React.Component {
    constructor(props) {
      super(props);
      extendObservable(this, {
        email: "",
        password: ""
      });

      // display the differences between onSubmit() {} / onSubmit = () => {}
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
      const { email, password } = this;
      console.log({ email, password });
    }

    onChange = e => {
      const { name, value } = e.target;
      this[name] = value;
    };

    render() {
      const { email, password } = this;
      return (
        <Container text>
          <Header as="h2">Login</Header>
          <Input
            name="email"
            onChange={this.onChange}
            value={email}
            placeholder="Email"
            fluid
          />
          <Input
            name="password"
            onChange={this.onChange}
            value={password}
            placeholder="Password"
            type="password"
            fluid
          />

          <Button onClick={this.onSubmit}>Submit</Button>
        </Container>
      );
    }
  }
);
