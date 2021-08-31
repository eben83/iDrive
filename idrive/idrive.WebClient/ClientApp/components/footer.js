import React, {} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
    return (
        <>
            <footer>
                <div className=' w-full bg-gray-400 h-2 z-20' />
                <div className='flex w-full justify-center items-center h-auto py-12 md:pt-0 md:h-52 bg-indigo-500'>
                    <div className='h-auto flex flex-col md:flex-row justify-evenly items-center h-auto' >
                        <a href='https://www.invertekdrives.com/'>
                            <img src='./images/Invertek-Official-Partner-Logo5954.jpg' alt='image' className='w-40'/>
                        </a>
                        <div className='flex justify-evenly w-64' >
                            <a href='https://www.facebook.com'>
                                <FontAwesomeIcon icon={faFacebook} className='text-white h-24 w-12 '/>
                            </a>
                            <a href='https://www.twitter.com'>
                                <FontAwesomeIcon icon={faTwitter} className='text-white h-24 w-12 pl-1'/>
                            </a>
                            <a href='https://www.instagram.com'>
                                <FontAwesomeIcon icon={faInstagram} className='text-white h-24 w-12 pl-1'/>
                            </a>
                        </div>
                        <div className='text-white text-xs md:pr-8' >
                            <p>
                                011 894 7532
                            </p>
                            <p>
                                011 894 7049
                            </p>
                            <p>
                                076 982 7371
                            </p>
                            <p>
                                service@idrivesa.co.za
                            </p>
                            <p>
                                www.idrivesa.co.za
                            </p>
                        </div>
                        <div className='text-white text-xs pt-5 md:pt-0' >
                            <p>
                                Unit 15, N12 Industrial Park
                            </p>
                            <p>
                                188 Dr Vosloo Str
                            </p>
                            <p>
                                Bartlett, Boksburg
                            </p>
                            <p className='pt-4'>
                                PO Box 407, Isando 1600
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;