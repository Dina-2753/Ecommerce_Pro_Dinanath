import React, { useEffect, useState } from 'react';
import '../Style/footer.css'

const PageProgress = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollY / windowHeight) * 100;
            setScroll(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div class="page-progress">
            <div class="page-progress-bar" style={{ width: `${scroll}%` }}></div>
        </div>
    );
};

export default PageProgress;
