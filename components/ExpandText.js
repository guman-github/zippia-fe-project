import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
const ExpandText = ({ content, limit }) => {
    const [showAll, setShowAll] = useState(false);

    const showMore = () => setShowAll(true);
    const showLess = () => setShowAll(false);

    if (content.length <= limit) {
        // there is nothing more to show
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    if (showAll) {
        // We show the extended text and a link to reduce it
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <Button className="position-absolute bottom-0 end-0" variant="link" onClick={showLess}>
                    Read less
                </Button>
            </div>
        );
    }
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = content.substring(0, limit) + '...';
    return (
        <div>
            <div className="truncate" dangerouslySetInnerHTML={{ __html: content }} />
            <Button className="position-absolute bottom-0 end-0" variant="link" onClick={showMore}>
                Read More
            </Button>
        </div>
    );
};

export default ExpandText;
