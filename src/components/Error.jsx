import { Link } from "react-router-dom";

function Error() {
    return (
        <div class="error">
            <div class="container">
                <h3 class="error-title">Произошла ошибка</h3>
                <div class="error-description">Проверьте подключение к интернету. Возможно, сервер отключился или временно не работает</div>
                <Link to="/" class="white-btn">Обновить</Link>
            </div>
        </div>
    );
}

export default Error;