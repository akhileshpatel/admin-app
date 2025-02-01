import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../../shared/Pagination';
import './Websites.css';

const Websites = () => {
    const [websites, setWebsites] = useState([]);
    const websitesPerPage = 2;
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search);
    const initialPage = parseInt(query.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        fetch('/repository/website.json')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Debugging line
                setWebsites(data);
            });
    }, []);

    useEffect(() => {
        if (currentPage !== initialPage) {
            navigate(`?page=${currentPage}`);
        }
    }, [currentPage, navigate, initialPage]);

    const indexOfLastWebsite = currentPage * websitesPerPage;
    const indexOfFirstWebsite = indexOfLastWebsite - websitesPerPage;
    const currentWebsites = websites.slice(indexOfFirstWebsite, indexOfLastWebsite);

    const totalPages = Math.ceil(websites.length / websitesPerPage);

    const handleWebsiteClick = (websiteId) => {
        navigate(`/websites/${websiteId}`);
    };

    return (
        <div>
            <div className="website-container">
                {currentWebsites.map(website => (
                    <div key={website.id} className="website-block" onClick={() => handleWebsiteClick(website.id)}>
                        <h3>
                            <span className={`status-icon ${website.websiteStatus.toLowerCase()}`}></span>
                            {website.name}
                        </h3>
                        <p>
                            <strong>Admin URL:</strong> 
                            <a href={website.adminUrl} target="_blank" rel="noopener noreferrer">{website.adminUrl}</a>, 
                            <strong>Public URL:</strong> 
                            <a href={website.publicUrl} target="_blank" rel="noopener noreferrer">{website.publicUrl}</a>
                        </p>
                        <p>
                            <strong>Contact Email:</strong> {website.contactEmail}, 
                            <strong>Contact Fax:</strong> {website.contactFax}, 
                            <strong>Contact Number:</strong> {website.contactNumber}
                        </p>
                        <p><strong>Type:</strong> {website.websiteType}</p>
                        <p>
                            <strong>Created By:</strong> {website.createdBy}, 
                            <strong>Updated By:</strong> {website.updatedBy}, 
                            <strong>Created Date:</strong> {website.createdDate}, 
                            <strong>Updated Date:</strong> {website.updatedDate}
                        </p>
                    </div>
                ))}
            </div>
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
            />
        </div>
    );
};

export default Websites;
