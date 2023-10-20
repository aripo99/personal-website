import Image from 'next/image'


const description = "I'm a software engineer based in the Bay Area. I enjoy building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends."

const AboutMe: React.FC = () => {
    return (
        <section className="mt-12 mb-12">
            <h1 className="text-4xl font-semibold tracking-tighter leading-tight mb-6 text-gray-600">About Me</h1>
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