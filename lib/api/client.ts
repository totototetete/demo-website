let wixClient: unknown | null = null;

export async function getWixClient() {
  return wixClient;
}

export function setWixClient(client: unknown) {
  wixClient = client;
}
