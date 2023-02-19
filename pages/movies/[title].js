import Error from "next/error";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";
import { useRouter } from "next/router";
import  useSWR  from "swr"
export default function MoviesByTitle() {
   const router = useRouter()
   const { title } = router.query;
   const { data, error } = useSWR(`https://moviesapi.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);
   if (data == null || data == undefined)
      return (
      <>
      </>
      );
   else
      if(data[0]==null)
         return (
         <>
         <Error statusCode={404}></Error>
         </>
         ); 
      else
         return (
         <>
         {data.map((movie) => (
            <div key={movie._id}>
               <PageHeader text={movie.title}/>
               <MovieDetails movie={movie}/>
            </div>
         ))}
         </>
         );   
}
 