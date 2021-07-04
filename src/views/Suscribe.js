import axios from 'axios';
import React, { useState, useEffect } from 'react';
const Suscribe = () => {
    const [searchText, setSearchText] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [filteredResult, setFilteredResult] = useState([])
    
    const token = JSON.stringify(localStorage.getItem("apiKey"))

    const filterResult = () => {
        setFilteredResult(searchResult.filter(title => title.originalTitle.includes(searchText)))
    }

    useEffect(() => {
        filterResult()
    },[searchText]);

    const search = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8080/titles`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'api-key': token
            },
        })
            .then((res) => res.json())
            .then(data => setSearchResult(data))
            .catch((err) => {
                console.log("entre en el error")
                console.log(err);
            });
    }
    const suscribe = (tconst) => {
        fetch("http://localhost:8080/review/subscribe", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'api-key': JSON.stringify(localStorage.getItem("apiKey"))
            }, 
            body: JSON.stringify({
                reviewId : tconst,
                nick: localStorage.getItem("nickname")
            }),
        })
            .then((res) => console.log(res.json()))
            .then(response => console.log(response))
            .catch((err) => {
                console.log(err);
            });
    
    }
    return (
        <div>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" onChange={(e) => setSearchText(e.target.value)} aria-label="Search" />
                <button class="btn btn-outline-success" type="submit" onClick={(e) => { search(e) }}>Search</button>
            </form>
            {
                searchResult.length > 0 ?
                    filteredResult.map(tittle => {
                        return (
                            <div class="col-3">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{tittle.originalTitle}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">{tittle.titleType}</h6>
                                        <p class="card-text">{tittle.genres}</p>
                                        <button type="button" class="btn btn-primary" onClick={() => suscribe(tittle.tconst)}>Suscribe</button>
                                    </div>
                                </div>
                            </div>)
                    })
                    :
                    <h1>...</h1>
            }
        </div>
    )
}

export default Suscribe