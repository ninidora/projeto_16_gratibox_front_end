import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../assets/style/Input';
import PageHeader from '../../components/PageHeader';
import UserContext from '../../Context/UserContext';
import Button from '../../assets/style/Button';

const SignIn = function () {
  const { userSign, updateUserSign } = useContext(UserContext);

  useEffect(() => {
    updateUserSign({ input: 'userPassword', value: '' });
  }, []);

  return (
    <StyledSignIn>
      <PageHeader
        title="Bem vindo ao GratiBox"
      />

      <div className="input-area">
        <div className="error-area">
          <Input
            placeholder="E-mail"
            value={(userSign?.userEmail || '')}
            onChange={(e) => updateUserSign({ input: 'userEmail', value: e.target.value })}
            required
            type="email"
          />
          <div className="error-alert">
            <p />
          </div>
          <div className="error-area">
            <Input
              placeholder="Senha"
              value={(userSign?.userPassword || '')}
              onChange={(e) => updateUserSign({ input: 'userPassword', value: e.target.value })}
              required
              type="password"
            />
            <div className="error-alert">
              <p />
            </div>
          </div>
        </div>
      </div>

      <div className="button-area">
        <Button type="submit">
          Cadastrar
        </Button>
        <Link to="/sign-up">
          <Button backGround="secondary">
            Ainda não sou grato
          </Button>
        </Link>
      </div>
    </StyledSignIn>
  );
};

export default SignIn;

const StyledSignIn = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  justify-content: center;
  gap: 43px;

  .input-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .error-area{
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .error-alert{
    height: 12px;
    padding: 0 18px;
    p{
    color: #ffffff;
    font-family: 'primaryBold';
    font-size: 12px;
    line-height: 18px;
    }
  }

   .button-area{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;