import homeIcon from "../assets/images/categories/image 5.svg";
import LoadingRow from "../components/LoadingRow";
import axios from "axios";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Error from "../components/Error";

function CategoriesPage() {

    const [categories, setCategries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://674da9ffb1d74c6e.mokky.dev/category/`);
                setCategries(response.data);
            }   
            catch(e) {
                setIsError(true);
                console.log(e);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);

    if (isError) {
        return <Error/>
    }

    return (
        <section class="mobile-block">
            <div class="mobile-block__header is-orange">
                Категории
            </div>
            {isLoading ? (<LoadingRow />) : (
                <div class="contanier">
                    <div class="category-row">
                        <Link to ='/' class="category-item">
                            <img src={homeIcon} alt="Home" class="category-item__image"/>
                            <span class="category-item__title">Все новости</span>
                        </Link>
                        {categories.map((category) => (
                            <Link to={`/category/posts/${category.id}`} class="category-item">
                                <img src={category.imageUrl} alt={category.name} class="category-item__image"/>
                                <span class="category-item__title">{category.name}</span>
                            </Link>
                        ))}
                        
                    </div>
                </div>
            )}

        </section>
    )
}

export default CategoriesPage;