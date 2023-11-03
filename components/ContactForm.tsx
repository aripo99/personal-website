import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ContactForm: React.FC = () => {
    return (
        <section className="my-16 self-start w-full" id="contact">
            <Card>
                <CardHeader>
                    <CardTitle>Contact Me</CardTitle>
                    <CardDescription>Lets get in touch</CardDescription>
                </CardHeader>
                <CardContent>
                    <label className="block text-gray-400 text-sm mb-1" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="w-full bg-gray-800 text-gray-300 rounded p-2 text-xs mb-3"
                        required
                    />

                    <label className="block text-gray-400 text-sm mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full bg-gray-800 text-gray-300 rounded p-2 text-xs mb-3"
                        required
                    />

                    <label className="block text-gray-400 text-sm mb-1" htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        className="w-full bg-gray-800 text-gray-300 rounded p-2 text-xs mb-3"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full p-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-medium mt-3"
                    >
                        SEND
                    </button>
                </CardContent>
            </Card>
        </section>
    )
}

export default ContactForm;

