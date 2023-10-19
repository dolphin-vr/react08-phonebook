import styled from "styled-components";

export const Wrapper = styled.div`
   margin: 0 auto ${props => props.theme.spacing(4)};
`

export const InputFilter = styled.input`
  padding: ${({ theme }) => theme.spacing(1)};
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 280px;
  font-size: 18px;
  font-weight: 500;
`
