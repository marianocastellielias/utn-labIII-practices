import PropTypes from 'prop-types';


const Table = ({ brand, income }) => {
    return (
        <>
            <tr>
                <td>{brand}</td>
                <td>${income}</td>
            </tr>
        </>
    )
}

Table.propTypes = {
    brand: PropTypes.string,
    income: PropTypes.number,
}

export default Table;