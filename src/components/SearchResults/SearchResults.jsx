import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../context/ThemeContext';
import './SearchResults.css';
import { api, api_key } from '../api';
import { deleteSearchMoives, fetchSearchMovies } from '../redux/actions/movies';
import LoadingPage from '../LoadingPage/LoadingPage';
import ReactPaginate from 'react-paginate';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import MovieCard from './MovieCard';

const SearchResults = () => {
    const [isLoading,setIsLoading]=useState(true)
    const params=useParams().keyword
    const isDark=useContext(ThemeContext)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const keyword=params.includes('query=')? params.replace("query='","").replace("'","")
            : params.replace("genre=","")
    const genreIds=keyword.split(',')
    console.log(genreIds)
    const genres=useSelector(state=> state.movies.genres)
    const filteredGenres=genres.filter(genre=> genreIds.includes(genre.id.toString()))
    const defaultOptions=filteredGenres.map(genre=>
        {return {
            value:genre.id,
            label:genre.name
        }})
    const [page,setPage]=useState(0)
    const [pages,setPages]=useState(20);
    const options=genres.map(genre=> {return {value:genre.id,label:genre.name}})
    const [selectedOptions,setSelectedOption]=useState(null)
    const api_url=params.includes('query=')?`/search/movie?api_key=${api_key}&query=${keyword}&page=${page+1}` : 
    `/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=1&with_genres=${keyword}&page=${page+1}`
    const fetchGenreMovies=async ()=>{
        setIsLoading(true)
        const res=await api.get(api_url)
        setPages(res.data.total_pages>500?500:res.data.total_pages-1)
        dispatch(fetchSearchMovies(res.data.results))
        setIsLoading(false)
    }
    const handlePageClick = (event) => {
        setPage(event.selected)
    };
    const movies= useSelector(state=> state.movies.searchMovies)
    const searchHandler=()=>{
        const genreIds=selectedOptions.map(option=> option.value)
        navigate(`../search/genre=${genreIds.toString()}`)
    }
    useLayoutEffect(()=>{
        window.scrollTo(0, 0)
    },[keyword])
    useEffect(()=>{
        dispatch(deleteSearchMoives())

            fetchGenreMovies()

    },[keyword,page])
    const colorStyles={

        menuList: (styles)=> ({...styles,
            padding:0
        }),
        control: (styles,{isFocused,isSelected}) => ({ ...styles, 
            backgroundColor: isDark?'#222':'#f6f6f6',
            boxShadow: 'none',
            borderColor: isFocused
                ? '#DF0E62'   
                : isSelected
                ? '#DF0E62'
                : '#000',
            ':hover': {
                borderColor: '#DF0E62'
            }
        }),
        input: (styles)=> ({
            ...styles,
            color: '#DF0E62',
        }),
        option: (styles, {isFocused}) =>{
            return {
                ...styles,
                backgroundColor: isFocused
                    ? isDark?'rgba(34, 34, 34,0.5)': 'rgba( 246, 246, 246,0.5)'
                    : isDark?'#222':'#f6f6f6',
                color : isDark? '#fff':'000',

            }       
        },
        multiValue: (styles)=>{
            return {
                ...styles,
                color: '#DF0E62',
                backgroundColor: isDark?'#0C0F0A':'#c9c7c7'
            }
        },
        multiValueLabel: (styles) => ({
            ...styles,
            color: '#DF0E62',
        }),
        multiValueRemove: (styles) => ({
            ...styles,
            ':hover': {
              backgroundColor: '#DF0E62',
              color: 'white',
            },
          }),
    }

  return (
    isLoading? (<LoadingPage />) :
    (
        <div style={{paddingTop:'200px'}}>
        <div className="flex items-center justify-center gap-1 px-1">
            <Select 
                defaultValue={defaultOptions}
                onChange={setSelectedOption}
                options={options}
                isMulti={true}
                className='respon-width'
                styles={colorStyles}
                
            />
            <div className=" h-fit">
                <button onClick={searchHandler} className={`${isDark?'text-white bg-secondary-dark':'text-black bg-secondary-light'} border-black  px-3 h-[38px] border rounded-md`}>Search</button>
            </div>
        </div>
        <h2 className={`text-2xl text-center py-5 combo-font underline ${isDark?'text-white':'text-black'}`}>
          {params.includes('query=')? `Search keyword - ${keyword}` :`Genres- ${defaultOptions.map(option=> option.label).toString()}`} 
        </h2>
        {
            movies.length>0?(
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:px-10 px-8  gap-4 py-10  search-movies">
                    {
                        movies.map(movie=>
                                <MovieCard key={movie.id} movie={movie} />
                            )
                    }
                </div>
            ): (<h3 className='text-pink text-3xl py-10 text-center roboto-font'>No Content Available!</h3>)
        }
        <ReactPaginate
            breakLabel="..."
            initialPage={page}
            nextLabel={<AiOutlineArrowRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pages}
            previousLabel={<AiOutlineArrowLeft />}
            containerClassName='pagination-box'
            pageClassName={`border ${isDark?'text-white border-white':'text-black border-black'} hover:text-pink-600 bg-transparent rounded-md h-8 flex items-center px-3 font-bold`}
            breakClassName={`border ${isDark?'text-white border-white':'text-black border-black'} bg-transparent rounded-md h-8 flex items-center px-3 font-bold`}
            nextClassName={`border ${isDark?'text-white border-white':'text-black border-black'} bg-transparent rounded-md h-8 flex items-center px-3 font-bold`}
            previousClassName={`border ${isDark?'text-white border-white':'text-black border-black'} bg-transparent rounded-md h-8 flex items-center px-3 font-bold`}
            activeClassName='text-pink'
            renderOnZeroPageCount={null}
        />
    </div>
    )
  )
}

export default SearchResults