import { Layout, Header, Projects, Featured, Form } from '../components';

export default function Home() {
  return (
    <>
      <Layout title='front-end web designer'>
        <Header />
        <Projects />
        <Featured />
        <Form />
      </Layout>
    </>
  );
}
