import React, { useEffect, useState } from 'react';
import styles from './Website.module.css';

const Website = () => {
    const [websites, setWebsites] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const websitesPerPage = 2;

    useEffect(() => {
        fetch('/repository/website.json')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Debugging line
                setWebsites(data);
            });
    }, []);

    const indexOfLastWebsite = currentPage * websitesPerPage;
    const indexOfFirstWebsite = indexOfLastWebsite - websitesPerPage;
    const currentWebsites = websites.slice(indexOfFirstWebsite, indexOfLastWebsite);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className={styles.websiteContainer}>
            <div className="website-container">
                {currentWebsites.map(website => (
                    <div key={website.id} className="website-block">
                        <h3>{website.name}</h3>
                        <a href={website.url} target="_blank" rel="noopener noreferrer">{website.url}</a>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {[...Array(Math.ceil(websites.length / websitesPerPage)).keys()].map(number => (
                    <button key={number} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Website;
