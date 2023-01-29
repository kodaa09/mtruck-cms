class PartnerService {
  static instance: PartnerService;

  private constructor() {}

  public static getInstance(): PartnerService {
    if (!PartnerService.instance) {
      PartnerService.instance = new PartnerService();
    }
    return PartnerService.instance;
  }

  getAllImages() {
    return [
      {
        id: 1,
        url: "/fiat-logo.png",
        alt: "fiat logo",
        width: 150,
        height: 150,
      },
      {
        id: 2,
        url: "/ford-logo.png",
        alt: "ford logo",
        width: 150,
        height: 150,
      },
      {
        id: 3,
        url: "/iveco-logo.png",
        alt: "iveco logo",
        width: 150,
        height: 150,
      },
      {
        id: 4,
        url: "/opel-logo.png",
        alt: "opel logo",
        width: 150,
        height: 150,
      },
      {
        id: 5,
        url: "/peugeot-logo.png",
        alt: "peugeot logo",
        width: 150,
        height: 150,
      },
      {
        id: 6,
        url: "/renault-logo.png",
        alt: "renault logo",
        width: 150,
        height: 150,
      },
    ];
  }
}
export default PartnerService.getInstance();