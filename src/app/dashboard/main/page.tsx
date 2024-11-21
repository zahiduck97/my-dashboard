import { WidgetsGrid } from '../../../components/dashboard/WidgetsGrid';


export const metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información General</span>

      <WidgetsGrid />
    </div>
  );
}