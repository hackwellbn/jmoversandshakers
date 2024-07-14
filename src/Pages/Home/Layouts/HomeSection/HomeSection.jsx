import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faTruck, faMapMarkerAlt, faShieldAlt, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './HomeSection.css';

const HomeSection = () => {
    useEffect(() => {
        const cards = Array.from(document.querySelectorAll(".card"));
        const cardsContainer = document.querySelector("#cards");

        cardsContainer.addEventListener("mousemove", (e) => {
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        });
    }, []);

    return (
        <div className="Homecontainer">
            <h1>for house exchange & more?</h1>
            <p>At JMoversAndShakers, we specialize in helping you seamlessly exchange homes by transporting and perfectly placing your belongings in your new space. Our professional team ensures a hassle-free moving experience, giving you peace of mind and making your transition smooth and stress-free.</p>
            <section id="cards" className="cards">
                <div className="card">
                    <div className="card-content">
                        <FontAwesomeIcon icon={faBoxOpen} />
                        <h2>Personalized Packing</h2>
                        <p>Our expert team carefully packs your belongings to ensure they are safe and secure during the move.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <FontAwesomeIcon icon={faTruck} />
                        <h2>Secure Transportation</h2>
                        <p>We use state-of-the-art vehicles and equipment to transport your items safely to your new home.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <h2>Precise Placement</h2>
                        <p>Our team will perfectly place your belongings in your new space according to your instructions.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <FontAwesomeIcon icon={faShieldAlt} />
                        <h2>Comprehensive Insurance</h2>
                        <p>Enjoy peace of mind with our comprehensive insurance coverage for all your valuable items.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <FontAwesomeIcon icon={faUsers} />
                        <h2>Experienced Professionals</h2>
                        <p>Our staff is trained and experienced, ensuring a smooth and efficient moving process.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <h2>Customer Satisfaction</h2>
                        <p>We prioritize customer satisfaction and work hard to exceed your expectations with every move.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeSection;
