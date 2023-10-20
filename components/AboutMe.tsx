import Image from 'next/image'


const description = "I'm a software engineer based in the Bay Area. I enjoy building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends."

const AboutMe: React.FC = () => {
    return (
        <section className="mt-12 mb-12">
            <h2 className="text-3xl font-bold mb-10 text-gray-200 underline">About Me</h2>
            <div className="flex justify-between items-center py-8">
                <Image
                    src={"/images/avatar.jpg"}
                    alt="Your Image Description"
                    className="w-1/4 rounded-full"
                    width={200}
                    height={200}
                />
                <div className="w-2/3 ml-8">
                    <p className="font-mono text-lg">{description}</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;