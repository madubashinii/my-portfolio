// import React, { useState } from 'react';
// import '../styles/Contact.css';
// import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// function Contact() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//         honeypot: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const toastId = toast.loading('Sending message...');

//         try {
//             const response = await fetch('http://localhost:5000/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 toast.update(toastId, {
//                     render: 'Message sent successfully!',
//                     type: 'success',
//                     isLoading: false,
//                     autoClose: 3000,
//                     closeOnClick: true,
//                 });
//                 setFormData({ name: '', email: '', message: '' });
//             } else {
//                 toast.update(toastId, {
//                     render: 'Failed to send message. Please try again.',
//                     type: 'error',
//                     isLoading: false,
//                     autoClose: 3000,
//                     closeOnClick: true,
//                 });
//             }
//         } catch (error) {
//             toast.update(toastId, {
//                 render: 'Error occurred while sending message.',
//                 type: 'error',
//                 isLoading: false,
//                 autoClose: 3000,
//                 closeOnClick: true,
//             });
//             console.error('Error:', error);
//         }
//     };



//     return (

//         <div className="contact-page" id='contact'>
//             <div className="header">
//                 <h1>Let's Connect</h1>
//             </div>

//             <div className="content">
//                 <div className="contact-info">


//                     <h2>Get in Touch</h2>
//                     <p className="contact-info-description">
//                         I'm open to internship opportunities, collaborations, or just a friendly tech chat. Feel free to reach out!
//                     </p>

//                     <ul>
//                         <li>
//                             <span className="icon-circle">
//                                 <FiMail />
//                             </span>
//                             <a href="mailto:madu.bashini7520@gmail.com">madu.bashini7520@gmail.com</a>
//                         </li>
//                         <li>
//                             <span className="icon-circle">
//                                 <FiPhone />
//                             </span>
//                             <a href="tel:+94 729247022">+94 729247022</a>
//                         </li>
//                         <li>
//                             <span className="icon-circle">
//                                 <FiMapPin />
//                             </span>
//                             <a
//                                 href="https://www.google.com/maps"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 Southern Province, Sri Lanka
//                             </a>
//                         </li>

//                     </ul>


//                 </div>

//                 <div className="contact-form">
//                     <form onSubmit={handleSubmit}>

//                         <input
//                             type="text"
//                             name="honeypot"
//                             value={formData.honeypot}
//                             onChange={handleChange}
//                             style={{ display: "none" }}
//                             autoComplete="off"
//                             tabIndex="-1"
//                         />


//                         <div className="form-group">
//                             <label>Name</label>
//                             <input
//                                 type="text"
//                                 placeholder="Your name"
//                                 name='name'
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Email</label>
//                             <input
//                                 type="email"
//                                 placeholder="username@domain.com"
//                                 name='email'
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label>Message</label>
//                             <textarea
//                                 placeholder="Your message..."
//                                 name='message'
//                                 rows={4}
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 required
//                             ></textarea>
//                         </div>
//                         <button type="submit">Send Message</button>
//                     </form>
//                 </div>
//             </div>

//             <ToastContainer
//                 position="top-right"
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="dark"
//             />


//         </div>
//     );
// }

// export default Contact;

import React, { useState } from 'react';
import '../styles/Contact.css';
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        honeypot: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const toastId = toast.loading('Sending message...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.update(toastId, {
                    render: 'Message sent successfully!',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                    closeOnClick: true,
                });
                setFormData({ name: '', email: '', message: '', honeypot: '' });
            } else {
                toast.update(toastId, {
                    render: 'Failed to send message. Please try again.',
                    type: 'error',
                    isLoading: false,
                    autoClose: 3000,
                    closeOnClick: true,
                });
            }
        } catch (error) {
            toast.update(toastId, {
                render: 'Error occurred while sending message.',
                type: 'error',
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
            console.error('Error:', error);
        }
    };



    return (

        <div className="contact-page" id='contact'>
            <div className="header">
                <h1>Let's Connect</h1>
            </div>

            <div className="content">
                <div className="contact-info">


                    <h2>Get in Touch</h2>
                    <p className="contact-info-description">
                        I'm open to internship opportunities, collaborations, or just a friendly tech chat. Feel free to reach out!
                    </p>

                    <ul>
                        <li>
                            <span className="icon-circle">
                                <FiMail />
                            </span>
                            <a href="mailto:madu.bashini7520@gmail.com">madu.bashini7520@gmail.com</a>
                        </li>
                        <li>
                            <span className="icon-circle">
                                <FiPhone />
                            </span>
                            <a href="tel:+94 729247022">+94 729247022</a>
                        </li>
                        <li>
                            <span className="icon-circle">
                                <FiMapPin />
                            </span>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Southern Province, Sri Lanka
                            </a>
                        </li>

                    </ul>


                </div>

                <div className="contact-form">
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="honeypot"
                            value={formData.honeypot}
                            onChange={handleChange}
                            style={{ display: "none" }}
                            autoComplete="off"
                            tabIndex="-1"
                        />


                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="username@domain.com"
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                placeholder="Your message..."
                                name='message'
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />


        </div>
    );
}

export default Contact;

