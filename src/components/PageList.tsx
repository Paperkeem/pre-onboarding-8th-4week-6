import styled from "styled-components";

import type { PageProps } from "../type/type";

type StProps = {
  isFocus: boolean;
};

export default function PageList({
  focusNum,
  maxPage,
  handlePagination,
}: PageProps) {
  const pageArray: JSX.Element[] = [];

  Array.from({ length: maxPage }, (_, i) => i + 1).forEach((page) =>
    pageArray.push(
      <Page
        key={page}
        isFocus={focusNum === page ? true : false}
        onClick={(e) => handlePagination(page, e)}
      >
        {page}
      </Page>
    )
  );

  return <PageListStyle>{pageArray}</PageListStyle>;
}

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button<StProps>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  margin-right: 3px;
  color: ${(props) => (props.isFocus ? "white" : "black")};
  background-color: ${(props) => (props.isFocus ? "gray" : "white")};
`;
