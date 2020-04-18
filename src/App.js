import React, { useState, useCallback } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import DefinitionList from './components/DefinitionList.js'
import Loading from './components/Loading.js'
import Error from './components/Error.js'

export default function App() {

  const [word, setWord] = useState('')
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // parse definitions from api response
  const parseJSON = json => {
    const definitions = []
    if (json.results) {
      json.results[0].lexicalEntries.forEach(le => {
        le.entries[0].senses.forEach(
          s => definitions.push(...s.definitions)
        )
      })
      return definitions
    } else {
      throw new Error('parsing error')
    }
  }

  const getDefinition = useCallback(
    async () => {
      setLoading(true)
      const prefix = 'https://stark-hollows-46944.herokuapp.com/'
      const api = `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}?fields=definitions`
      const url = prefix + api
      const headers = {
        "app_id": process.env.REACT_APP_ID,
        "app_key": process.env.REACT_APP_KEY
      }
      // make API call
      const response = await fetch(url, { headers })
        .then((resp) => resp.json())
        .catch(err => console.log('fetch request error:' + err))
      try {
        const definitions = parseJSON(response)
        // update UI
        setWord('')
        setResult({ word, definitions })
        setError(false)
      } catch (err) {
        setError(true)
      }
      setLoading(false)
    },
    [word],
  )


  return (
    <div className="container h-100 d-flex justify-content-center">
      <div className="container">
        <div className="jumbotron light mt-3">
          <h1 className="display-3" id="header">define for me</h1>
          <InputGroup className="mb-3">
            <FormControl
              required
              onChange={e => setWord(e.target.value)}
              value={word}
              placeholder="word"
              aria-label="word"
            />
            <InputGroup.Append>
              <Button variant="outline-dark" onClick={getDefinition}>
                define
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        {loading && <Loading />}
        {error && <Error />}
        {<DefinitionList result={result} />}
      </div>
    </div>
  )
}
