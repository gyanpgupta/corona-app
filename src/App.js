import React from "react";
import { Layout } from 'antd';
import "./App.css";
import Routes from "./routes";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <br />
      <Content><Routes /></Content>
      <br />
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
