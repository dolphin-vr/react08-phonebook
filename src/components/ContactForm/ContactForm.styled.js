import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 50%;
  /* ${({ theme }) => theme.spacing(3)} */
  margin: 0 auto;
  /* ${({ theme }) => theme.spacing(8)} */
  padding: ${({ theme }) => theme.spacing(10)};
  /* border-radius: ${({theme}) => theme.radii.sm};
  border: 1px solid black; */
  font-size: 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  font-weight: 500;
`;

export const StyledField = styled(Field)`
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 13px;
  color: red;
`;
