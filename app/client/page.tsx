import { ClientsSection } from "@/components/home/ClientSection";
import { getClientsSection } from "@/lib/data/home/clientSection";


export default async function ClientsPage() {
      const clients = await getClientsSection();
  return (
    <main>
      {clients && <ClientsSection data={clients} />}
    </main>
  );
}