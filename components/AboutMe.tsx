import InteractiveProfileImage from './InteractiveProfileImage';

const description = "Hey! I'm Ari. I'm a software engineer based in the Bay Area. I enjoy building stuff and am always trying to learn something new. My experience spans across ML, MLOps, backend, and frontend. Above all, I just want to create useful things.";

const AboutMe: React.FC = () => {
    return (
        <section className="my-12">
            <div className="flex justify-between items-center py-8">
                <InteractiveProfileImage />
                <div className="w-2/3 ml-8">
                    <p className="font-mono text-lg">{description}</p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;