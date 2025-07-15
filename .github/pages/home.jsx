import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Home() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Layout>
      <Card title="Welcome to PLP Task Manager">
        <p>Organize your tasks and explore posts from a public API.</p>
        <div className="mt-4 space-x-2">
          <Button variant="primary" onClick={toggleTheme}>
            Toggle Theme
          </Button>
        </div>
      </Card>
    </Layout>
  );
}
