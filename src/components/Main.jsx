import React from "react";
import {Movies} from  '../components/Movies'
import {Preloader} from "../components/Preloader";
import {Search} from  '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY
//const API_KEY = '649b0731'

class Main extends React.Component {
  state = {
      movies: [],
      loading: true,
      tota: '',
  }

 //смонтировался компонент и запрос данных
 componentDidMount() {
   fetch(  `https://www.omdbapi.com/?apikey=${API_KEY}&s=zombi`)
       .then(response => response.json() )
       .then(data => this.setState({ movies: data.Search, loading: false,
        tota: data.totalResults,
       }))
       .catch((err) =>{
           console.error( 'ОШИБКА ', err)
           this.setState({loading: false})
       })
  }


  // поисковая ф-я
    searchMovies = (str, type =  'all') => {
      this.setState({loading: true})
 fetch(  `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
     type !== 'all' ? `&type=${type}` : ''}`  )
            .then(response => response.json() )
            .then(data => this.setState({movies: data.Search, loading: false,
             tota: data.totalResults,
                }))
     .catch((err) =>{
         console.error( 'ОШИБКА допол ', err)
         this.setState({loading: false})
     })
    }


   render() {
      const { movies, loading, tota  } = this.state;
    return (
        <main className = 'container content'>
   <div>всего найдено {tota} </div>
            <Search  searchMovies={this.searchMovies} />
     { loading ? < Preloader />  :   <Movies  movies={movies} /> }
           </main>
           )
   }
}

export {Main}