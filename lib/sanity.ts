import { dataset, projectId } from "@/env";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
});