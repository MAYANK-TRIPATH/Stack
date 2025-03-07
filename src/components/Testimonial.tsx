import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
    const testimonials = [
        {
            name: "John Doe",
            text: "This platform has helped me improve my coding skills tremendously. Highly recommended!",
            role: "Software Engineer",
        },
        {
            name: "Jane Smith",
            text: "A fantastic experience! The problems are well-structured and fun to solve.",
            role: "Full Stack Developer",
        },
        {
            name: "Alex Johnson",
            text: "Great UI and amazing challenges. It keeps me engaged and motivated.",
            role: "Data Scientist",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="h-64">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-6 bg-gray-300 rounded-lg shadow-lg text-center h-48">
                        <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
}
