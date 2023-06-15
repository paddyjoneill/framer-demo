import { AnimatePresence, motion, SVGMotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';

const options: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0 };

const ReturnToTopButton = () => {
    const [showButton, setShowButton] = useState<boolean>(false);

    const observerCallback: IntersectionObserverCallback = (entries) => {
        const [entry] = entries;
        setShowButton(!entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, options);
        const header = document.querySelector('#header');
        if (header) observer.observe(header);
        return () => {
            if (header) observer.unobserve(header);
        };
    }, []);

    const onClick = () => {
        window.scrollTo(0, 0);
    };

    const transition = { duration: 1, ease: 'easeInOut', delay: 0.2 };

    const lineWidth = 10;

    const sharedOptions: SVGMotionProps<SVGPathElement> = {
        fill: 'transparent',
        strokeWidth: `${lineWidth}`,
        stroke: 'black',
        strokeLinecap: 'round',
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: transition
    };

    return (
        <AnimatePresence>
            {showButton &&
                <motion.button
                    className='h-12 w-12 border-2 border-black rounded-xl drop-shadow-xl p-2 fixed bottom-4 right-4 bg-white'
                    onClick={onClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                >
                    <svg xmlns='http://www.w3.org/2000/svg'
                         viewBox='0 0 100 100'
                    >
                        <motion.path
                            d={`M50 ${lineWidth / 2} L50 ${100 - (lineWidth / 2)}`}
                            {...sharedOptions}
                        />
                        <motion.path
                            d={`M50 ${lineWidth / 2} L${lineWidth / 2} 50`}
                            {...sharedOptions}
                        />
                        <motion.path
                            d={`M50 ${lineWidth / 2} L${100 - (lineWidth / 2)} 50`}
                            {...sharedOptions}
                        />
                    </svg>
                </motion.button>
            }
        </AnimatePresence>
    );
};

export default ReturnToTopButton;

