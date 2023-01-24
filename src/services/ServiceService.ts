class ServiceService {
  static instance: ServiceService;

  private constructor() {}

  public static getInstance(): ServiceService {
    if (!ServiceService.instance) {
      ServiceService.instance = new ServiceService();
    }
    return ServiceService.instance;
  }

  async getAllServices () {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/services?populate=*`);
    if (!res.ok) throw new Error("Failed to fetch services data");
    const json = await res.json();
    return json.data;
  }
}
export default ServiceService.getInstance();