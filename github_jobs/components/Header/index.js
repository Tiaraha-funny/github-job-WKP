import React from "react";
import { Container, Input, Button, Form } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Input = function HeaderInput({ ...restProps }) {
    return <Input {...restProps} />
  }

Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
  }

  Header.Form = function HeaderForm({ children, ...restProps }) {
    return <Form {...restProps}>{children}</Form>;
  }