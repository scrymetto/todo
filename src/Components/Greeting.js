import React from 'react';

const Greeting = () => {

    const styles = {};
    const date = new Date();
    let hour = date.getHours();
    let greeting;
    if (hour >= 6 && hour <= 12) {
        greeting = 'morning';
        styles.background = "#FF7F50"
    }
    if (hour >= 12 && hour <= 17) {
        greeting = 'day';
        styles.background = "#228B22"
    }
    if (hour >= 17 && hour <= 22) {
        greeting = 'evening';
        styles.background = "#4B0082"
    }
    if (hour >= 22 || hour <= 6) {
        greeting = 'night';
        styles.background = "#2F4F4F"
    }
    return (
        <div>
            <h1 className="Greeting" style={styles}>Good {greeting}!</h1>
        </div>
    )
};

export default Greeting