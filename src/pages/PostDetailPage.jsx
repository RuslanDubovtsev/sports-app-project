import backIcon from "../assets/images/Vector.svg";
import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import LoadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);
    
    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://6c159f4277705ca2.mokky.dev/post/${id}`)
                setPost(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } 
            finally {
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id]);

    if (isError) {
        return <Error/>
    }


    return (
        <section class="mobile-block">
            <Link to="/" class="back-bottom">
                <div class="contanier">
                    <img src={backIcon} alt="back icon"/>
                    Назад
                </div>
            </Link>
            {isLoading ? (<LoadingDetail/>) : (
                <div class="container">
                    <div class="post-detail-block">
                        <h3 class="news-card__title">{post.title}</h3>
                        <span class="news-card__date">{post.date}</span>
                        <p class="description">{post.description}</p>
                        <img src={post.URL} alt={post.title}/>
                        <div class="autor">Источник: <strong class="green-white-text">{post.author}</strong></div>
                        <button class="tag-button">{post.category}</button>
                    </div>
                </div>
            )}

        </section>        
    );
}

export default PostDetailPage