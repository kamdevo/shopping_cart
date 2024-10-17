
const Filters = () => {
    return (
        <section className="filters">
            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value="mens clothing">men's clothings</option>
                    <option value="womensclothing">women's clothing</option>
                    <option value="electronics">electronics</option>
                    <option value="jewelry">jewelery</option>
                </select>
            </div>
        </section >
    )
}


export default Filters