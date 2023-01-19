import { useEffect, useState } from "react";
import { getAllList, getList } from "../redux/commentSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function usePagenation() {
  const [maxPage, setMaxPage] = useState(0);
  const [focusNum, setFocusNum] = useState(1);

  const Maxlength = useAppSelector((state) => state.comment.maxNum);
  const dispatch = useAppDispatch();

  const handlePagination = (
    page: number,
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e) setFocusNum(Number(e.currentTarget?.textContent));
    else setFocusNum(1);
    dispatch(getList(page));
  };

  useEffect(() => {
    async function fetchMaxData() {
      await dispatch(getAllList());
      setMaxPage(Math.ceil(Maxlength / 4));
    }
    fetchMaxData();
  }, [focusNum, Maxlength]);

  return { focusNum, maxPage, handlePagination };
}
