import info from "./data";
export default function Products()
{
    return(
        <>
        <table className="table table-hover">
            <thead className="table-dark">
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                info.map((item)=>
                <tr>
                    <td><img src={item.image} height="50"/></td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td><button>Add to cart</button></td>
                </tr>
                )}
            </tbody>
        </table>
        </>
    )
}