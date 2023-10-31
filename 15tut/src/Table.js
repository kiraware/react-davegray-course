import Row from "./Row"

const Table = ({ items }) => {
  return (
    <section className="table-container">
        <table>
            <tbody>
                {items.map(item => <Row key={item.id} item={item}/>)}
            </tbody>
        </table>
    </section>
  )
}

export default Table