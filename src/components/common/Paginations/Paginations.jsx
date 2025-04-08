import { useNavigate, useSearchParams } from "react-router-dom";
import classes from "./Paginations.module.css";

let Paginations = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const urlPage = searchParams.get("page");
    const activePage = urlPage ? parseInt(urlPage, 10) : currentPage;

    const handlePageChange = page => {
        navigate(`/users?page=${page}`);
        onPageChanged(page);
    };

    const renderPage = page => (
        <span
            key={page}
            className={activePage === page ? `${classes.btn} ${classes.selected}` : classes.btn}
            onClick={() => handlePageChange(page)}
        >
            {page}
        </span>
    );

    const pages = [];

    pages.push(renderPage(1));

    if (activePage > 5) pages.push(<span key="dots1">...</span>);

    const start = Math.max(2, activePage - 4);
    const end = Math.min(pagesCount - 1, activePage + 4);

    for (let i = start; i <= end; i++) pages.push(renderPage(i));

    if (activePage < pagesCount - 2) pages.push(<span key="dots2">...</span>);

    pages.push(renderPage(pagesCount));

    return <div className={classes.paginations}>{pages}</div>;
};

export default Paginations;
