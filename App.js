import React from "react";

    const movies = [

        {

        title:"The groot",
        imgURL: "/images/movie1.jpg",
        description: "A journey through space and time.",
        url: "/images/movie1.jpg"
},

    {
    
        title:"Gamers",
        imgURL: "/images/movie2.jpg",
        description: "A mind-bending thriller by Christopher Nolan.",
        url: "/images/movie2.jpg"
},

{    
    title:"Race in the city",
    imgURL:"/images/movie3.jpg",
    description: "A journey through space and time.",
    url:"/images/movie3.jpg"
},

{
    title: "Howl",
    imgURL :"/images/movie4.jpg",
    description: "The legend of Batman continues.",
    url:"/images/movie4.jpg"
},


{
    title: "Cars",
    imgURL: "/images/movie5.jpg",
    description: "The thriller Movie",
    url:"/images/movie5.jpg"
},


{    
    title:"Thor",
    imgURL: "/images/movie6.jpg",
    description: "A journey through space and time.",
    url:"/images/movie6.jpg"
},

{
    title: "Game of throns",
    imgURL: "/images/movie7.jpg",
    description: "The thriller Movie",
    url:"/images/movie7.jpg"
},


{
    title: "Adventure Kids",
    imgURL :"/images/movie8.jpg",
    description: "The legend of Batman continues.",
    url:"/images/movie8.jpg"
},

{
    title: "Naruto",
    imgURL: "/images/movie9.jpg",
    description: "The thriller Movie",
    url:"/images/movie9.jpg"
}

];

const Movie = (props) =>{
    const {title,imgURL,description,url} = props;
    return(
        <article className="movie-each">
            <img src= {imgURL} alt={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href= {url} className="button" >{title}</a>
        </article>
    );
};

const App = () =>{
    return(
        <section className="container">
            {movies.map((eachObj,index)=>{
                const {title,imgURL,description, url} = eachObj;
                return(
                    <Movie 
                    key = {index}
                    title = {title}
                    imgURL = {imgURL}
                    description = {description}
                    url = {url}
                    />
                );
            })};
        </section>
    );
};
export default App;
