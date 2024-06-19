import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const PageButton = styled.button`
  background-color: ${props => props.disabled ? '#ccc' : '#FFCC15'};
  color: black;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  padding: 10px 15px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 16px;

  &:hover {
    background-color: ${props => props.disabled ? '#ccc' : '#FFDA3A'};
  }
`;

const PageIndicator = styled.span`
  font-size: 16px;
  color: white;
  margin: 0 10px;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationContainer>
      <PageButton 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PageButton>
      <PageIndicator>{currentPage} / {totalPages}</PageIndicator>
      <PageButton 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
