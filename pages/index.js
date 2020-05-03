import { Layout, Header, About, Projects, Featured, Form } from '../components';

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <About />
        <Projects />
        <Featured />
        <Form />
      </Layout>
    </>
  );
}
