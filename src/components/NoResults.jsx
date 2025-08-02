import "../css/NoResults.css"

function NoResults() {
    return (
        <div className="noresults-container">
            <h2 className="noresults-title">No results found</h2>
            {/* <p className="noresults-text">
                We couldn't find any results for "<strong>{searchQuery}</strong>"
            </p> */}
        </div>
    )
}

export default NoResults;