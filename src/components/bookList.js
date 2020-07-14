import React from 'react';

function BookList(props) {
    const {data} = props;
    const listItems = data.map((book) =><li>{book}</li>);

    return(
        <div className='mt-3'>
            <h3>Top selling products</h3>
        </div>,
    <ul>{listItems}</ul>
    )
}
 export default BookList;