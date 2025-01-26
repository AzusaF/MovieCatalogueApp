import Link from "next/link";
import { Card } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

// export async function getStaticPaths() { // pre-render the one I introduce
//    return {
//      paths: [
//        { params: { _id: "573a1395f29313caabce2fa3" } }
//      ],
//      fallback: false
//    }
// }

export async function getStaticProps() {
   const res = await fetch(`https://moviesapi-kt9c.onrender.com/api/movies/573a1395f29313caabce2fa3`);
   const data = await res.json()
 
   return { props: { movie: data } }
}

export default function About(props) {
   return (
   <>
     <PageHeader text="About the Developer: Azusa Fukuda"/>
     <Card>
      <Card.Body>
        <p>
        A developer who loves coding and watching movies, especially French films.　<br/>
        It is hard to pick a movie, but if I name one, my favorite should be <Link href={"/movies/" + props.movie.title} passHref legacyBehavior>&quot;Bonnie and Clyde&quot;</Link> because it is influenced by European films, especially French films. In fact, it was planned to be directed by a French director.
        </p>
      </Card.Body>
      <MovieDetails movie={props.movie} />
     </Card>
   </>
   );
}
