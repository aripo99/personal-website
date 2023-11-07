import Link from 'next/link';
import { FaLinkedinIn, FaGoodreads, FaGithub, FaEnvelope } from 'react-icons/fa';

type SocialIconProps = {
    href: string,
    ariaLabel: string,
    IconComponent: React.ElementType,
};

const SocialIcon = ({ href, ariaLabel, IconComponent }: SocialIconProps) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className="text-gray-500 hover:text-gray-700">
        <IconComponent className="h-6 w-6" />
    </Link>
);

const Footer = () => {
    return (
        <footer className="flex justify-center items-center space-x-4 py-4 border-t">
            <SocialIcon
                href="https://www.linkedin.com/in/ari-polakof-78b976150/"
                ariaLabel="LinkedIn"
                IconComponent={FaLinkedinIn}
            />
            <SocialIcon
                href="https://www.goodreads.com/user/show/108987275-ari-polakof"
                ariaLabel="Goodreads"
                IconComponent={FaGoodreads}
            />
            <SocialIcon
                href="https://github.com/aripo99"
                ariaLabel="GitHub"
                IconComponent={FaGithub}
            />
            <SocialIcon
                href="mailto:ari@kognis.ai"
                ariaLabel="Email"
                IconComponent={FaEnvelope}
            />
        </footer>
    );
};

export default Footer;
