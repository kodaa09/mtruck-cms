class FaqService {
  static instance: FaqService;

  private constructor() {}

  public static getInstance(): FaqService {
    if (!FaqService.instance) {
      FaqService.instance = new FaqService();
    }
    return FaqService.instance;
  }

  async getAllFaqs() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/faqs?populate=*`);
    if (!res.ok) throw new Error("Failed to fetch faqs data");
    const json = await res.json();
    return json.data;
  }
}
export default FaqService.getInstance();