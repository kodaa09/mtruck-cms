class NoticeService {
  static instance: NoticeService;

  private constructor() {}

  public static getInstance(): NoticeService {
    if (!NoticeService.instance) {
      NoticeService.instance = new NoticeService();
    }
    return NoticeService.instance;
  }

  async getAllNotices() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/notices`);
    if (!res.ok) throw new Error("Failed to fetch notices data");
    const json = await res.json();
    return json.data;
  }
}
export default NoticeService.getInstance();