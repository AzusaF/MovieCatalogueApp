
import MovieDetails from "@/components/MovieDetails"
import PageHeader from "@/components/PageHeader"
import { useEffect, useState } from "react"
import { Accordion, Pagination } from "react-bootstrap"
import  useSWR  from "swr"

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { data, error } = useSWR(`https://moviesapi-kt9c.onrender.com/api/movies?page=${page}&perPage=10`);
  
  useEffect(() => { if (data) {
    setPageData(data); }
  }, [data]);
  
  function previous() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  
  function next() {
    setPage(page + 1);
  }
  
  
  return (
    <>
      <PageHeader text="Film Collection : Sorted by Date"/>
      <Accordion>
        {pageData.map((movie) => (
          <Accordion.Item eventKey={movie._id} key={movie._id}>
            <Accordion.Header>
              <strong>{movie.title}</strong>&nbsp;({movie.year}: Directed By {movie.directors[1]?movie.directors.map(director=>director).join(", "):movie.directors})
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={movie} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous}/>
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} /> 
      </Pagination>
    </>
  )
}

