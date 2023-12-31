import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Form, Input, Label } from './RegisterForm.styled';
import { BtnAuth } from 'components/AppHeader/AppHeader.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input name="name" type="text" />
      </Label>
      <Label>
        E-mail
        <Input name="email" type="email" />
      </Label>
      <Label>
        Password
        <Input name="password" type="password" />
      </Label>
      <BtnAuth>Register</BtnAuth>
    </Form>
  );
};
