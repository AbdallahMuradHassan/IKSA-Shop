import Image from "next/image";

async function getAboutData() {
    const res = await fetch("http://localhost:3000/api/about", {
        cache: "force-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch about data");
    }

    const data = await res.json();
    return data.about;
}

export default async function AboutUs() {
    const about = await getAboutData();

    return (
        <section>
            <div className="responsive-container-block bigContainer">


                <div className="responsive-container-block Container">
                    <Image
                        src={about.mission.image}
                        width={500}
                        height={400}
                        alt={about.mission.title}
                    />
                    <div className="allText aboveText">
                        <p className="text-blk headingText">{about.mission.title}</p>
                        <p className="text-blk subHeadingText">{about.mission.subtitle}</p>
                        <p className="text-blk description">{about.mission.text}</p>
                        <button className="explore">Explore</button>
                    </div>
                </div>

                <div className="responsive-container-block Container bottomContainer">
                    <Image
                        src={about.vision.image}
                        width={500}
                        height={400}
                        alt={about.vision.title}
                    />
                    <div className="allText bottomText">
                        <p className="text-blk headingText">{about.vision.title}</p>
                        <p className="text-blk subHeadingText">{about.vision.subtitle}</p>
                        <p className="text-blk description">{about.vision.text}</p>
                        <button className="explore">Explore</button>
                    </div>
                </div>

            </div>
        </section>
    );
}



