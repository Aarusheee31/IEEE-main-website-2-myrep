import { useEffect, useState } from 'react';
import CircularText from './CircularText';
import './Preloader.css';

export default function Preloader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="preloader">
            <CircularText
                text="IEEE • TECHNOLOGY • INNOVATION • COMMUNITY • "
                spinDuration={10}
                direction="clockwise"
                size={240}
                fontSize={13}
                color="#93A052"
                onHover={false}
                repeat={2}
            />

            <div className="preloader-center">
                <img src={`${import.meta.env.BASE_URL}ieee-logo.png`} alt="IEEE Logo" />
            </div>
        </div>
    );
}