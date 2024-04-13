import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto">
                <footer className="footer py-16 text-white">
                    <aside>
                        <p className="text-xl">
                            Appon Luxuary.
                            <br />
                            Providing Luxury Services since 1992
                        </p>
                    </aside>
                    <nav>
                        <h6 className="uppercase text-white mb-4">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="uppercase text-white mb-4">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="uppercase text-white mb-4">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <div className="flex items-center py-10 justify-between border-t border-white">
                    <div>
                        <p>© 2024 . All rights reserved.</p>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-3 text-xl">
                            <FaFacebook />
                        </div>
                        <div className="mr-3 text-xl">
                            <FaXTwitter />
                        </div>
                        <div className="mr-3 text-xl">
                            <FaLinkedin />
                        </div>
                        <div className="text-xl">
                            <FaPinterest />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
