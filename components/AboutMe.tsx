import Image from 'next/image'


const description = "Hey! I'm Ari. I'm a software engineer based in the Bay Area. I have a knack for building stuff and am always on the hunt to learn something new. My experience spans across ML, MLOps, backend, and frontend. Above all, I just want to create useful things!";

const AboutMe: React.FC = () => {
    return (
        <section className="mt-12 mb-12">
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