export async function GET() {
  return Response.json({
    about: {
      mission: {
        title: "Our Mission",
        subtitle: "Building quality products",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image:
          "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg",
      },
      vision: {
        title: "Our Vision",
        subtitle: "Innovating for the future",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image:
          "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg",
      },
    },
  });
}