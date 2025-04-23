import { useEffect, useRef, useState } from "react";



const images = [
    {
      id: 1,
      src: "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?t=st=1744189871~exp=1744193471~hmac=a735a05b854470241a1c294e1bf9d42c8a26ee57a6904bac0b93cfcadced0d89&w=996",
    },
    {
      id: 2,
      src: "https://img.freepik.com/free-vector/social-media-automation-isometric-banner-seo_107791-844.jpg?t=st=1744189978~exp=1744193578~hmac=59757ae2960e833dd6d35e0f67d1ad1a60da4ae2c46d0855b5f010fbd1cef245&w=1480",
    },
    {
      id: 3,
      src: "https://img.freepik.com/free-vector/academic-excellence-illustration_24877-52355.jpg?t=st=1744190074~exp=1744193674~hmac=0567f9c79f2d108312bac3d50aaf28598381636ce6c7636e79704b40062119eb&w=826",
    },
  ];

const Carousel = () => {
  const totalSlides = images.length;
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(1);

  // Auto-scroll only when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev % 4) + 1); // assuming 4 slides
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Scroll into view (horizontal only)
  useEffect(() => {
    const element = document.getElementById(`slide${current}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [current]);

  // Observe visibility of the carousel
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (carouselRef.current) observer.observe(carouselRef.current);

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  return (
    <div className="my-16 flex items-center justify-center w-3/4">
      {/* Auto Carousel */}
      <div className="carousel" ref={carouselRef}>
        {images.map((image) => (
          <div
            id={`slide${image.id}`}
            key={image.id}
            className="carousel-item relative w-full"
          >
            <img
              src={image.src}
              className="w-full rounded-lg"
              alt={`Slide ${image.id}`}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${image.id === 1 ? images.length : image.id - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${(image.id % images.length) + 1}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
