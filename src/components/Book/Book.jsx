export const Book = ({title, author,description, website}) => {

    return ( <li>
        <a href={website}>{title}</a> by {author}
        <p>Book description: {description}</p> 
    </li>)
}