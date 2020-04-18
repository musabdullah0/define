import React from 'react'

const DefinitionList = ({ result }) => {
    return result.definitions ? (
        <div className="container">
            <h1>{result.word}:</h1>
            <ul className="mt-3">
                {result.definitions.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
            </ul>
        </div>
    ) : null
}

export default DefinitionList