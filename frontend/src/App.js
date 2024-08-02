import Global from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form";
import Grid from './components/Grid'
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    const res = await axios.get("http://localhost:8800");
    setUsers(res.data.sort)
  }

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form />
        <Grid />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <Global />
    </>
  );
}

export default App;
