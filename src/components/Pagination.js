/* eslint-disable react/prop-types */
import { useState } from 'react';

const Pagination = (props) => {
  const { totalPosts, numberPerPage, onPageChange } = props;
  const [selectedPage, setSelectedPage] = useState(0);
  const numberOfPages = Math.ceil(totalPosts / numberPerPage);
  const buttons = [];
  const handlePageChange = (page) => {
    onPageChange(page);
    setSelectedPage(page);
  };
  for (let i = 0; i < numberOfPages; i += 1) {
    buttons.push(<button className={`page-button ${i === selectedPage ? 'selected' : ''}`} onClick={() => handlePageChange(i)} key={`button-${i}`} type="button">{i + 1}</button>);
  }
  return (
    <>
      <div className="buttons-div">
        {buttons}
      </div>
    </>
  );
};

export default Pagination;
