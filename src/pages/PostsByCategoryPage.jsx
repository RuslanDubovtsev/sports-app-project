import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import LoadingPost from "../components/LoadingPost";
import axios from "axios";
import PostCard from "../components/PostCard";

function PostsByCategoryPage() {

    const {id} = useParams();
    const [posts, setPosts] = useState([]); /* Hook  */
    const [category, setCategory] = useState({}); /**[] or [{}, {}] - список объектов, но нам нужен лишь 1 объект по id, так что просто объект - {}  */
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://674da9ffb1d74c6e.mokky.dev/category/${id}`);
                setCategory(response.data);
            } catch(e) {
                console.log(e)
            }
        }
        
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await axios.get('https://6c159f4277705ca2.mokky.dev/post')
                setPosts(response.data); // json
            } 
            catch(error) {
                console.log(error);
            } 
            finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
        fetchCategory();
    }, [id]);

    return (
        <section class="mobile-block">
            <div class="mobile-block__header is-green">
                {category.name}
            </div>
            <div class="all-news-block">
                {isLoading ? (<LoadingPost/>) : (
                    <>
                        {posts.map((post) => {
                            return post.category === category.name ? (
                                <PostCard key={post.id} post={post} />
                            ) : null
                        })}
                    </>
                )}
            </div>  
        </section>
    )
}

export default PostsByCategoryPage;