import { ClientsSection } from "@/components/home/ClientSection";
import { getClientsSection } from "@/lib/data/home/clientSection";


export const revalidate = 300;

export default async function ClientsPage() {
      const [ 
        clients, 
      ] = await Promise.all([
        getClientsSection(),
      ]);
  return (
    <main>
      {clients && <ClientsSection data={clients} />}
    </main>
  );
}